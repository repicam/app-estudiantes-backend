const { validationResult } = require('express-validator')
const Search = require('../models/SearchHistory')
const User = require('../models/User')
const { createResponse } = require('../utils/responseGenerator')

const USER_ERROR = 'Error getting user'

const guardarBusqueda = async (req) => {
  let data = null

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return createResponse(false, data, errors.array(), 400)
  }

  const { userId, body } = req

  const userExists = await User.findById(userId)

  if (!userExists) {
    return createResponse(false, data, USER_ERROR, 400)
  }
  body.user = userExists._id
  const createdSearch = await Search.create(body)

  await User.saveSearchIntoUser(createdSearch, userExists)

  data = {
    search: createdSearch
  }

  return createResponse(true, data, null, 201)
}

const obtenerUltimasBusquedas = async (req) => {
  let data = null

  const { userId, query } = req
  const { limit } = query

  const user = await User.findById(userId)

  if (!user) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  const historical = user.searches?.sort((a, b) => {
    return b.createdAt - a.createdAt
  }).slice(0, limit)

  data = {
    userId,
    historical
  }

  return createResponse(true, data, null, 200)
}

module.exports = { guardarBusqueda, obtenerUltimasBusquedas }
