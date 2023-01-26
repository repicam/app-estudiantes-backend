const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const { createResponse } = require('../utils/responseGenerator')
const { signToken } = require('../utils/jwtOperations')
const { uploadImage, deleteTempImage, deleteImageCloud } = require('../utils/imageManager')
const { initUserSeguridad, verificarUser, buildForgotPassword, passwordReset } = require('../utils/verificationManager')
const { sendVerificationMail, sendForgotPasswordMail, sendChangedPasswordMail } = require('../utils/emailTransporter')
const buildHostName = require('../utils/hostManager')

const SALT_ROUNDS = 10

const MSG_NO_VERIFICADO = 'Debe verificar la cuenta. Revise su correo'

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
    return createResponse(false, data, 'Email y/o username ya existe. Pruebe a iniciar sesión', 400)
  }
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)

  const userData = req.body
  userData.password = passwordHash
  userData.seguridad = initUserSeguridad()

  const createdUser = await User.create(userData)

  await sendVerificationMail(createdUser, buildHostName(req))
  console.log(`${buildHostName(req)}/api/user/verify/email/${createdUser._id}/${createdUser.seguridad?.cryptoToken}`)

  data = {
    message: 'Registrado correctamente. ' + MSG_NO_VERIFICADO,
    id: createdUser._id
  }

  return createResponse(true, data, null, 201)
}

const renovarToken = async (req) => {
  let data = null
  const { userName, userId } = req

  const userExists = await User.findById(userId)

  if (!userExists) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
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
    imagen: userExists.imagen.secure_url
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
    if (userDB.seguridad?.restaurarPassword) {
      return createResponse(false, null, 'Se ha solicitado un cambio de password y debe terminar el proceso', 400)
    }

    if (!bcrypt.compareSync(password, userDB.password)) {
      return createResponse(false, null, 'email o password incorrecto', 401)
    }

    if (!userDB.seguridad?.verificado) {
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
      imagen: userDB.imagen.secure_url
    }
    return createResponse(true, data, null, 200)
  }
  return createResponse(false, null, 'email o password incorrecto', 401)
}

const subirFotoUsuario = async (req) => {
  let data = null

  const { userId, files } = req
  const imagen = files.imagen

  if (!imagen) {
    return createResponse(false, data, 'Error obteniendo la imagen', 400)
  }

  const userExists = await User.findById(userId)

  if (!userExists) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }

  const imagenAntigua = userExists.imagen?.public_id

  const uploadedImage = await uploadImage('photo_users', imagen.tempFilePath)
  await deleteTempImage(imagen.tempFilePath)

  userExists.imagen = {
    public_id: uploadedImage.public_id,
    secure_url: uploadedImage.secure_url
  }

  const userUpdated = await User.update(userId, userExists)

  if (imagenAntigua) {
    await deleteImageCloud(imagenAntigua)
  }

  data = {
    imagen: userUpdated.imagen.secure_url,
    id: userUpdated._id,
    name: userUpdated.name,
    username: userUpdated.username
  }

  return createResponse(true, data, null, 201)
}

const verificarEmail = async (req) => {
  let data = null
  const { userId, cryptoToken } = req.params

  const userExists = await User.find({ _id: userId, 'seguridad.cryptoToken': cryptoToken })

  if (!userExists) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }

  userExists.seguridad = verificarUser(userExists)

  const userUpdated = await User.update(userId, userExists)

  data = {
    id: userId,
    username: userUpdated.username,
    verificado: userUpdated.seguridad.verificado
  }

  return createResponse(true, data, null, 200)
}

const modificarUsuario = async (req) => {
  let data = null

  const { userId, body } = req
  const { username, name, password } = body

  const userExists = await User.findById(userId)

  if (!userExists) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }

  const usernameExists = await User.find({ username })

  if (userExists.username !== username && usernameExists) {
    return createResponse(false, data, 'Username ya en uso', 400)
  }
  const passwordHash = password ? await bcrypt.hash(password, SALT_ROUNDS) : userExists.password

  userExists.username = username || userExists.username
  userExists.name = name || userExists.name
  userExists.password = passwordHash

  const userUpdated = await User.update(userId, userExists)

  data = {
    imagen: userUpdated.imagen.secure_url,
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
  console.log(userid)
  const { password } = body

  if (!password) {
    return createResponse(false, data, 'Debe informar la nueva contraseña', 400)
  }

  const userExists = await User.find({
    _id: userid,
    'seguridad.cryptoToken': cryptotoken,
    'seguridad.restaurarPassword': true
  })

  if (!userExists) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }

  userExists.seguridad = passwordReset(userExists)
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)
  userExists.password = passwordHash

  await User.update(userId, userExists)

  await sendChangedPasswordMail(userExists)

  data = {
    msg: 'La password ha sido actualizada'
  }

  return createResponse(true, data, null, 200)
}

const forgotPassword = async (req) => {
  let data = null
  const { email } = req.body

  if (!email) {
    return createResponse(false, data, 'Debe informar el email para recuperar la contraseña', 400)
  }

  const userExists = await User.find({ email })

  if (!userExists) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }

  userExists.seguridad = buildForgotPassword(userExists)

  const userUpdated = await User.update(userExists._id, userExists)
  await sendForgotPasswordMail(userUpdated)
  console.log(`${buildHostName(req)}/api/user/reset/password/${userExists._id}/${userExists.seguridad?.cryptoToken}`)

  data = {
    msg: 'Ha solicitado cambiar la contraseña',
    id: userUpdated._id,
    cryptoToken: userUpdated.seguridad?.cryptoToken
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
