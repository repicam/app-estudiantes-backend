const userService = require('../services/userService')

const registroUsuario = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await userService.registroUsuario(req)
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

const renovarToken = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await userService.renovarToken(req)
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

const loginUsuario = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await userService.loginUsuario(req)
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

const subirFotoUsuario = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await userService.subirFotoUsuario(req)
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

module.exports = { registroUsuario, renovarToken, loginUsuario, subirFotoUsuario }
