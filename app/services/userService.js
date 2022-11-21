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

  if (!name || !username || !email || !password) {
    return createResponse(false, data, 'Faltan datos obligatorios (name, username, email y password)', 400)
  }

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

module.exports = { registroUsuario }
