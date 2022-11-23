const express = require('express')
const userController = require('../controllers/userController')
const { bodyValidator } = require('../middlewares/validators')

const router = express.Router()

router.route('/registro').post(bodyValidator, userController.registroUsuario)
router.route('/login').post(bodyValidator, userController.loginUsuario)

module.exports = router
