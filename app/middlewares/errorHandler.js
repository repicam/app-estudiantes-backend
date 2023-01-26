const { createResponse } = require('../utils/responseGenerator')

const errorHandler = (error, request, response, next) => {
  let responseData = null

  if (error.name === 'CastError') {
    responseData = createResponse(false, null, 'Id introducido incorrecto', 400)
  } else if (error.name === 'ValidationError') {
    responseData = createResponse(false, null, error.message, 400)
  } else if (error.name === 'TokenExpiredError') {
    responseData = createResponse(false, null, 'El token administrado ha caducado', 401)
  } else if (error.name === 'JsonWebTokenError') {
    responseData = createResponse(false, null, 'Tu petición no tiene cabecera de autorización o es incorrecta', 401)
  }

  if (!responseData) {
    next(error)
  }

  const { success, data, errorMsg, statusCode } = responseData
  const resp = {
    success,
    data,
    errorMsg
  }
  response.status(statusCode).json(resp)
}

module.exports = errorHandler
