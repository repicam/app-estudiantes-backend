const express = require('express')
const favSearchController = require('../controllers/favSearchController')
const { favSearchValidator } = require('../middlewares/validators')
const tokenValidator = require('../middlewares/tokenValidator')

const router = express.Router()

router.route('/').post(favSearchValidator, tokenValidator, favSearchController.createFavSearch)
  .get(tokenValidator, favSearchController.getFavSearches)
router.route('/:pageId').delete(tokenValidator, favSearchController.deleteFavSearch)

module.exports = router
