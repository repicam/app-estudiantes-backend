const { validationResult } = require('express-validator')
const User = require('../models/User')
const Course = require('../models/Curso')
const { createResponse } = require('../utils/responseGenerator')

const USER_ERROR = 'Error getting user'

const crearCurso = async (req) => {
  let data = null

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return createResponse(false, data, errors.array(), 400)
  }

  const { userId, body } = req

  const userExists = await User.findById(userId)

  if (!userExists) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  body.user = userExists._id
  const cursoData = setFechaByEstado(body)
  const createdCurso = await Course.create(cursoData)

  await User.saveCursoIntoUser(createdCurso, userExists)

  data = {
    course: createdCurso
  }

  return createResponse(true, data, null, 201)
}

function setFechaByEstado (cursoData) {
  switch (cursoData.state) {
    case 'TD':
      cursoData.startDate = null
      cursoData.finishDate = null
      break
    case 'IP':
      cursoData.startDate = cursoData.startDate || new Date()
      cursoData.finishDate = null
      break
    case 'FZ':
      cursoData.startDate = cursoData.startDate || new Date()
      cursoData.finishDate = new Date()
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
  let cursoExists = await Course.findById(id)
  if (!cursoExists) {
    return createResponse(false, null, 'Error updating the course', 400)
  }
  const { title, description, state } = req.body
  cursoExists.title = title || cursoExists.title
  cursoExists.description = description || cursoExists.description
  cursoExists.state = state || cursoExists.state
  cursoExists = setFechaByEstado(cursoExists)
  const cursoUpdate = await Course.findByIdAndUpdate(id, cursoExists)
  const data = {
    userId: cursoUpdate.user,
    course: cursoUpdate
  }
  return createResponse(true, data, null, 201)
}

const getCursos = async (req) => {
  let data = null

  const { userId } = req

  const user = await User.findById(userId)

  if (!user) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  data = {
    userId,
    courses: user.courses
  }

  return createResponse(true, data, null, 200)
}

const getCursoById = async (req) => {
  let data = null

  const { userId, params } = req
  const { id } = params

  const user = await User.findById(userId)

  if (!user) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  const course = await Course.find({ _id: id, user: userId })

  data = {
    userId,
    course
  }

  return createResponse(true, data, null, 200)
}

const eliminarCurso = async (req) => {
  let data = null

  const { userId, params } = req
  const { id } = params

  const user = await User.findById(userId)

  if (!user) {
    return createResponse(false, data, USER_ERROR, 400)
  }

  const cursoEliminado = await Course.deleteOne({ _id: id, user: userId })

  if (!cursoEliminado.deletedCount) {
    return createResponse(false, data, 'Error deleting course', 400)
  }

  data = {
    userId
  }

  return createResponse(true, data, null, 200)
}

module.exports = { crearCurso, getCursos, getCursoById, eliminarCurso, actualizarCurso }
