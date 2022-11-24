const cursoService = require('../services/cursoService')

const crearCurso = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await cursoService.crearCurso(req)
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

module.exports = { crearCurso }
