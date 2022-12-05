const express = require('express')
const historicoBusquedaController = require('../controllers/historicoBusquedaController')
const { guardarBusquedaValidator } = require('../middlewares/validators')
const tokenValidator = require('../middlewares/tokenValidator')

const router = express.Router()

router.route('/').post(guardarBusquedaValidator, tokenValidator, historicoBusquedaController.guardarBusqueda)
  .get(tokenValidator, historicoBusquedaController.obtenerUltimasBusquedas)

module.exports = router
