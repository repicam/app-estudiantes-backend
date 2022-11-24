const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const { createResponse } = require('../utils/responseGenerator')
const { signToken } = require('../utils/jwtOperations')

const SALT_ROUNDS = 10

const registroUsuario = async (req) => {
  let data = null

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return createResponse(false, data, errors.array(), 400)
  }

  const { name, username, email, password } = req.body

  const usernameExists = await User.find({ username })
  const emailExists = await User.find({ email })

  if (usernameExists || emailExists) {
    return createResponse(false, data, 'Email y/o username ya existe. Pruebe a iniciar sesión', 400)
  }
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)
  const userData = req.body
  userData.password = passwordHash

  const createdUser = await User.create(userData)

  const userToken = {
    id: createdUser._id,
    name
  }

  const token = signToken(userToken)

  data = {
    token,
    id: createdUser._id,
    name,
    username
  }

  return createResponse(true, data, null, 201)
}

const renovarToken = async (req) => {
  let data = null
  const { name, id } = req

  const userExists = await User.find({ id })

  if (!userExists) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }

  const userToken = {
    id,
    name
  }

  const token = signToken(userToken)

  data = {
    token,
    id,
    name,
    username: userExists.username
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
    if (!bcrypt.compareSync(password, userDB.password)) {
      return createResponse(false, null, 'email o password incorrecto', 401)
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
      token
    }
    return createResponse(true, data, null, 200)
  }
  return createResponse(false, null, 'email o password incorrecto', 401)
}

module.exports = { registroUsuario, renovarToken, loginUsuario }
