const express = require('express')
const userController = require('../controllers/userController')
const { registroValidator, loginValidator } = require('../middlewares/validators')
const tokenValidator = require('../middlewares/tokenValidator')

const router = express.Router()

router.route('/registro').post(registroValidator, userController.registroUsuario)
router.route('/login').post(loginValidator, userController.loginUsuario)
router.route('/renew').post(tokenValidator, userController.renovarToken)

module.exports = router
