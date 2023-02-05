const { validationResult } = require('express-validator')
const Favourite = require('../models/FavSearch')
const User = require('../models/User')
const { createResponse } = require('../utils/responseGenerator')

const USER_ERROR = 'Error getting user'

const createFavSearch = async (req) => {
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

  const favExists = userExists.favourites?.filter(fav => fav.pageId === body.pageId)

  if (!favExists) {
    body.user = userExists._id
    const newFav = await Favourite.create(body)

    await User.saveToDoIntoUser(newFav, userExists)

    data = {
      favourite: newFav
    }
  } else {
    data = {
      favourite: favExists
    }
  }

  return createResponse(true, data, null, 201)
}

const getFavSearches = async (req) => {
  let data = null

  const { userId } = req

  const user = await User.findById(userId)

  if (!user) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  data = {
    userId,
    favourites: user.favourites
  }

  return createResponse(true, data, null, 200)
}

const deleteFavSearch = async (req) => {
  let data = null

  const { userId, params } = req

  const { pageId } = params

  const deletedFav = await Favourite.deleteOne({ pageId, user: userId })

  if (!deletedFav.deletedCount) {
    return createResponse(false, data, 'Error todo not found', 400)
  }

  data = {
    userId
  }

  return createResponse(true, data, null, 200)
}

module.exports = { createFavSearch, getFavSearches, deleteFavSearch }
