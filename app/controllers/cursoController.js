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
const actualizarCurso = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await cursoService.actualizarCurso(req)
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

const getCursos = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await cursoService.getCursos(req)
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

const getCursoById = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await cursoService.getCursoById(req)
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

module.exports = { crearCurso, getCursos, getCursoById, actualizarCurso }
