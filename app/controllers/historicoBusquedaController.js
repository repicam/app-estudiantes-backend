const historicoBusquedaService = require('../services/historicoBusquedaService')

const guardarBusqueda = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await historicoBusquedaService.guardarBusqueda(req)
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

const obtenerUltimasBusquedas = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await historicoBusquedaService.obtenerUltimasBusquedas(req)
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

module.exports = { guardarBusqueda, obtenerUltimasBusquedas }
