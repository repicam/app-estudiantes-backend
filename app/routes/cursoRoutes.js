const express = require('express')
const cursoController = require('../controllers/cursoController')
const { cursoValidator } = require('../middlewares/validators')
const tokenValidator = require('../middlewares/tokenValidator')

const router = express.Router()

router.route('/').post(cursoValidator, tokenValidator, cursoController.crearCurso)
  .get(tokenValidator, cursoController.getCursos)

router.route('/:id').get(tokenValidator, cursoController.getCursoById)
  .delete(tokenValidator, cursoController.eliminarCurso)

module.exports = router
