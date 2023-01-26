const todoService = require('../services/todoService')

const crearTodo = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await todoService.crearTodo(req)
    const response = {
      success,
      data,
      errorMsg
    }
    res.status(statusCode).json(response)
  } catch (error) {
    next(error)
  }
}

const actualizarTodo = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await todoService.actualizarTodo(req)
    const response = {
      success,
      data,
      errorMsg
    }
    res.status(statusCode).json(response)
  } catch (error) {
    next(error)
  }
}

const eliminarTodo = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await todoService.eliminarTodo(req)
    const response = {
      success,
      data,
      errorMsg
    }
    res.status(statusCode).json(response)
  } catch (error) {
    next(error)
  }
}

const obtenerTodos = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await todoService.obtenerTodos(req)
    const response = {
      success,
      data,
      errorMsg
    }
    res.status(statusCode).json(response)
  } catch (error) {
    next(error)
  }
}

const obtenerTodosById = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await todoService.obtenerTodosById(req)
    const response = {
      success,
      data,
      errorMsg
    }
    res.status(statusCode).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = { crearTodo, actualizarTodo, eliminarTodo, obtenerTodos, obtenerTodosById }
