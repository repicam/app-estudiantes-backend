const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const { createResponse } = require('../utils/responseGenerator')
const { signToken } = require('../utils/jwtOperations')
const { uploadImage, deleteTempImage, deleteImageCloud } = require('../utils/imageManager')
const { initUserSeguridad, verificarUser, buildForgotPassword, passwordReset } = require('../utils/verificationManager')
const { sendVerificationMail, sendForgotPasswordMail, sendChangedPasswordMail } = require('../utils/emailTransporter')
const buildHostName = require('../utils/hostManager')

const USER_ERROR = 'Error getting user'

const SALT_ROUNDS = 10

const MSG_NO_VERIFICADO = 'You must verify the account. Check your mail'

const registroUsuario = async (req) => {
  let data = null

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return createResponse(false, data, errors.array(), 400)
  }

  const { username, email, password } = req.body

  const usernameExists = await User.find({ username })
  const emailExists = await User.find({ email })

  if (usernameExists || emailExists) {
    return createResponse(false, data, 'Invalid Email/Username', 400)
  }
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)

  const userData = req.body
  userData.password = passwordHash
  userData.security = initUserSeguridad()

  const createdUser = await User.create(userData)

  await sendVerificationMail(createdUser, buildHostName(req))

  data = {
    msg: 'Registered successfully. ' + MSG_NO_VERIFICADO,
    id: createdUser._id
  }

  return createResponse(true, data, null, 201)
}

const renovarToken = async (req) => {
  let data = null
  const { userName, userId } = req

  const userExists = await User.findById(userId)

  if (!userExists) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  const userToken = {
    id: userId,
    name: userName
  }

  const token = signToken(userToken)

  data = {
    token,
    id: userId,
    name: userName,
    username: userExists.username,
    image: userExists.image.secure_url
  }

  return createResponse(true, data, null, 200)
}

const loginUsuario = async (req) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return createResponse(false, null, errors.array(), 400)
  }
  const { email, password } = req.body
  const userDB = await User.find({ email })
  if (userDB) {
    if (userDB.security?.restorePassword) {
      return createResponse(false, null, 'A password change has been requested and you must finish the process', 400)
    }

    if (!bcrypt.compareSync(password, userDB.password)) {
      return createResponse(false, null, 'Invalid email o password', 401)
    }

    if (!userDB.security?.verified) {
      return createResponse(false, null, MSG_NO_VERIFICADO, 400)
    }

    const userToken = {
      id: userDB._id,
      name: userDB.name
    }
    const token = signToken(userToken)
    const data = {
      id: userDB._id,
      name: userDB.name,
      username: userDB.username,
      token,
      image: userDB.image.secure_url
    }
    return createResponse(true, data, null, 200)
  }
  return createResponse(false, null, 'Invalid email o password', 401)
}

const subirFotoUsuario = async (req) => {
  let data = null

  const { userId, files } = req
  const image = files.image

  if (!image) {
    return createResponse(false, data, 'Error getting the image', 400)
  }

  const userExists = await User.findById(userId)

  if (!userExists) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  const imagenAntigua = userExists.image?.public_id

  const uploadedImage = await uploadImage('photo_users', image.tempFilePath)
  await deleteTempImage(image.tempFilePath)

  userExists.image = {
    public_id: uploadedImage.public_id,
    secure_url: uploadedImage.secure_url
  }

  const userUpdated = await User.update(userId, userExists)

  if (imagenAntigua) {
    await deleteImageCloud(imagenAntigua)
  }

  data = {
    image: userUpdated.image.secure_url,
    id: userUpdated._id,
    name: userUpdated.name,
    username: userUpdated.username
  }

  return createResponse(true, data, null, 201)
}

const verificarEmail = async (req) => {
  let data = null
  const { cryptoToken } = req.params

  const userExists = await User.find({ 'security.cryptoToken': cryptoToken })

  if (!userExists) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  userExists.security = verificarUser(userExists)

  const userUpdated = await User.update(userExists._id, userExists)

  data = {
    email: userUpdated.email,
    username: userUpdated.username,
    verified: userUpdated.security.verified
  }

  return createResponse(true, data, null, 200)
}

const modificarUsuario = async (req) => {
  let data = null

  const { userId, body } = req
  const { username, name, password } = body

  const userExists = await User.findById(userId)

  if (!userExists) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  const usernameExists = await User.find({ username })

  if (userExists.username !== username && usernameExists) {
    return createResponse(false, data, 'Username already exists', 400)
  }
  const passwordHash = password ? await bcrypt.hash(password, SALT_ROUNDS) : userExists.password

  userExists.username = username || userExists.username
  userExists.name = name || userExists.name
  userExists.password = passwordHash

  const userUpdated = await User.update(userId, userExists)

  data = {
    image: userUpdated.image.secure_url,
    id: userUpdated._id,
    name: userUpdated.name,
    username: userUpdated.username
  }

  return createResponse(true, data, null, 201)
}

const resetPassword = async (req) => {
  let data = null
  const { headers, body } = req
  const { userid, cryptotoken } = headers
  const { password } = body

  if (!password) {
    return createResponse(false, data, 'You must inform the new password', 400)
  }

  const userExists = await User.find({
    _id: userid,
    'security.cryptoToken': cryptotoken,
    'security.restorePassword': true
  })

  if (!userExists) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  userExists.security = passwordReset(userExists)
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)
  userExists.password = passwordHash

  await User.update(userExists._id, userExists)

  await sendChangedPasswordMail(userExists)

  data = {
    msg: 'The password has been updated'
  }

  return createResponse(true, data, null, 200)
}

const forgotPassword = async (req) => {
  let data = null
  const { email } = req.body

  if (!email) {
    return createResponse(false, data, 'You must provide the email to recover the password', 400)
  }

  const userExists = await User.find({ email })

  if (!userExists) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  userExists.security = buildForgotPassword(userExists)

  const userUpdated = await User.update(userExists._id, userExists)
  await sendForgotPasswordMail(userUpdated)

  data = {
    msg: 'You have requested to change your password',
    id: userUpdated._id,
    cryptoToken: userUpdated.security?.cryptoToken
  }

  return createResponse(true, data, null, 200)
}

module.exports = {
  registroUsuario,
  renovarToken,
  loginUsuario,
  subirFotoUsuario,
  verificarEmail,
  modificarUsuario,
  resetPassword,
  forgotPassword
}
