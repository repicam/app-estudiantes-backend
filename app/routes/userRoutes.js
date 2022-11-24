const express = require('express')
const userController = require('../controllers/userController')
const { bodyValidator } = require('../middlewares/validators')
const tokenValidator = require('../middlewares/tokenValidator')

const router = express.Router()

router.route('/registro').post(bodyValidator, userController.registroUsuario)
router.route('/login').post(bodyValidator, userController.loginUsuario)

router.route('/renew').post(tokenValidator, userController.renovarToken)

module.exports = router
