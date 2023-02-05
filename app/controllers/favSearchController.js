const favSearchService = require('../services/favSearchService')

const createFavSearch = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await favSearchService.createFavSearch(req)
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

const deleteFavSearch = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await favSearchService.deleteFavSearch(req)
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

const getFavSearches = async (req, res, next) => {
  try {
    const { success, data, errorMsg, statusCode } = await favSearchService.getFavSearches(req)
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

module.exports = { createFavSearch, deleteFavSearch, getFavSearches }
