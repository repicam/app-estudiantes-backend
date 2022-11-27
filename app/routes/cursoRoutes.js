const express = require('express')
const cursoController = require('../controllers/cursoController')
const { cursoValidator, paramCursoValidator } = require('../middlewares/validators')
const tokenValidator = require('../middlewares/tokenValidator')

const router = express.Router()

router.route('/').post(cursoValidator, tokenValidator, cursoController.crearCurso)
router.route('/:id').patch(paramCursoValidator, tokenValidator, cursoController.actualizarCurso)

module.exports = router
