const express = require('express')
const cursoController = require('../controllers/cursoController')
const { cursoValidator, paramCursoValidator } = require('../middlewares/validators')
const tokenValidator = require('../middlewares/tokenValidator')

const router = express.Router()

router.route('/').post(cursoValidator, tokenValidator, cursoController.crearCurso)
router.route('/:id').patch(paramCursoValidator, tokenValidator, cursoController.actualizarCurso)
  .get(tokenValidator, cursoController.getCursos)
router.route('/:id').get(tokenValidator, cursoController.getCursoById)

module.exports = router
