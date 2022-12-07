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

  const { userId, body } = req

  const userExists = await User.findById(userId)

  if (!userExists) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }
  body.user = userExists._id
  const createdTodo = await Todo.create(body)

  await User.saveToDoIntoUser(createdTodo, userExists)

  data = {
    todo: createdTodo
  }

  return createResponse(true, data, null, 201)
}

const actualizarTodo = async (req) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return createResponse(false, null, errors.array(), 400)
  }
  const id = req.params.id
  const todoExists = await Todo.findById(id)
  if (!todoExists) {
    return createResponse(false, null, 'Error actualizando el toDo', 400)
  }
  const { title, description, completed } = req.body
  todoExists.title = title || todoExists.title
  todoExists.description = description || todoExists.description
  todoExists.completed = completed || todoExists.completed
  const todoUpdate = await Todo.findByIdAndUpdate(id, todoExists)
  const data = {
    userId: todoUpdate.user,
    todo: todoUpdate
  }
  return createResponse(true, data, null, 200)
}

module.exports = { crearTodo, actualizarTodo }
