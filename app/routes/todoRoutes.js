const express = require('express')
const todoController = require('../controllers/todoController')
const { todoValidator } = require('../middlewares/validators')
const tokenValidator = require('../middlewares/tokenValidator')

const router = express.Router()

router.route('/').post(todoValidator, tokenValidator, todoController.crearTodo)

module.exports = router
