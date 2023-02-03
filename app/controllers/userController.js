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

const verificarEmail = async (req, res, next) => {
  try {
    const { success } = await userService.verificarEmail(req)
    if (success === true) {
      res.redirect(process.env.URL_SIGNIN)
    } else {
      res.redirect(process.env.URL_REGISTER)
    }
  } catch (error) {
    next(error)
  }
}

const modificarUsuario = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await userService.modificarUsuario(req)
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

const resetPassword = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await userService.resetPassword(req)
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

const forgotPassword = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await userService.forgotPassword(req)
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
