const { validationResult } = require('express-validator')
const Todo = require('../models/Todo')
const User = require('../models/User')
const { createResponse } = require('../utils/responseGenerator')

const crearTodo = async (req) => {
  let data = null

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return createResponse(false, data, errors.array(), 400)
  }

  const { id, body } = req

  const userExists = await User.find({ id })

  if (!userExists) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }
  body.user = userExists._id
  body.completed = body.completed || false
  const createdTodo = await Todo.create(body)

  data = {
    todo: createdTodo
  }

  return createResponse(true, data, null, 201)
}

module.exports = { crearTodo }
