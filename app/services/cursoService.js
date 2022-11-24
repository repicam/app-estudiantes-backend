const { validationResult } = require('express-validator')
const User = require('../models/User')
const Curso = require('../models/Curso')
const { createResponse } = require('../utils/responseGenerator')

const crearCurso = async (req) => {
  let data = null

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return createResponse(false, data, errors.array(), 400)
  }

  const { id, body } = req

  const userExists = await User.find({ id })

  if (!userExists) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }

  body.user = userExists._id
  const cursoData = setFechaByEstado(body)
  const createdCurso = await Curso.create(cursoData)

  data = {
    curso: createdCurso
  }

  return createResponse(true, data, null, 201)
}

function setFechaByEstado (cursoData) {
  switch (cursoData.estado) {
    case 'PH':
      cursoData.fechaInicio = null
      cursoData.fechaFin = null
      break
    case 'EP':
      cursoData.fechaInicio = cursoData.fechaInicio || new Date()
      cursoData.fechaFin = null
      break
    case 'FZ':
      cursoData.fechaInicio = cursoData.fechaInicio || new Date()
      cursoData.fechaFin = new Date()
      break
  }

  return cursoData
}

module.exports = { crearCurso }
