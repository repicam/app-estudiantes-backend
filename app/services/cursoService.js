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

  const { userId, body } = req

  const userExists = await User.findById(userId)

  if (!userExists) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }

  body.user = userExists._id
  const cursoData = setFechaByEstado(body)
  const createdCurso = await Curso.create(cursoData)

  await User.saveCursoIntoUser(createdCurso, userExists)

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
const actualizarCurso = async (req) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return createResponse(false, null, errors.array(), 400)
  }
  const id = req.params.id
  let cursoExists = await Curso.findById(id)
  if (!cursoExists) {
    return createResponse(false, null, 'Error actualizando el curso', 400)
  }
  const { titulo, descripcion, estado } = req.body
  cursoExists.titulo = titulo || cursoExists.titulo
  cursoExists.descripcion = descripcion || cursoExists.descripcion
  cursoExists.estado = estado || cursoExists.estado
  cursoExists = setFechaByEstado(cursoExists)
  const cursoUpdate = await Curso.findByIdAndUpdate(id, cursoExists)
  const data = {
    userId: cursoUpdate.user,
    curso: cursoUpdate
  }
  return createResponse(true, data, null, 201)
}

const getCursos = async (req) => {
  let data = null

  const { userId } = req

  const user = await User.findById(userId)

  if (!user) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }

  data = {
    userId,
    cursos: user.cursos
  }

  return createResponse(true, data, null, 200)
}

const getCursoById = async (req) => {
  let data = null

  const { userId, params } = req
  const { id } = params

  const user = await User.findById(userId)

  if (!user) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }

  const curso = await Curso.find({ _id: id, user: userId })

  data = {
    userId,
    curso
  }

  return createResponse(true, data, null, 200)
}

const eliminarCurso = async (req) => {
  let data = null

  const { userId, params } = req
  const { id } = params

  const user = await User.findById(userId)

  if (!user) {
    return createResponse(false, data, 'Error obteniendo el usuario', 400)
  }

  const cursoEliminado = await Curso.deleteOne({ _id: id, user: userId })

  if (!cursoEliminado.deletedCount) {
    return createResponse(false, data, 'Error eliminando el curso', 400)
  }

  data = {
    userId
  }

  return createResponse(true, data, null, 200)
}

module.exports = { crearCurso, getCursos, getCursoById, eliminarCurso, actualizarCurso }
