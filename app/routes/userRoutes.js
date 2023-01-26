const express = require('express')
const userController = require('../controllers/userController')
const { registroValidator, loginValidator, modificarUsuarioValidator } = require('../middlewares/validators')
const tokenValidator = require('../middlewares/tokenValidator')
const uploadTempFile = require('../middlewares/fileUpload')

const router = express.Router()

router.route('/register').post(registroValidator, userController.registroUsuario)
router.route('/login').post(loginValidator, userController.loginUsuario)
router.route('/renew').post(tokenValidator, userController.renovarToken)
router.route('/user/uploadPhoto').patch(tokenValidator, uploadTempFile, userController.subirFotoUsuario)
router.route('/user/verify/email/:userId/:cryptoToken').get(userController.verificarEmail)
router.route('/user').patch(tokenValidator, modificarUsuarioValidator, userController.modificarUsuario)
router.route('/user/reset/password/:userId/:cryptoToken').put(userController.resetPassword)
router.route('/user/forgot/password').post(userController.forgotPassword)

module.exports = router
