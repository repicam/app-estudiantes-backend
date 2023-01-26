const getCursos = require('./cursos/get-cursos')
const getCurso = require('./cursos/get-curso')
const createCurso = require('./cursos/create-curso')
const updateCurso = require('./cursos/update-curso')
const deleteCurso = require('./cursos/delete-curso')
const getToDos = require('./toDos/get-toDos')
const getToDo = require('./toDos/get-toDo')
const createToDo = require('./toDos/create-toDo')
const updateToDo = require('./toDos/update-toDo')
const deleteToDo = require('./toDos/delete-toDo')
const getBusquedas = require('./registroBusquedas/get-busquedas')
const createbusqueda = require('./registroBusquedas/create-busqueda')
const login = require('./users/login')
const registro = require('./users/registro')
const renew = require('./users/renew')
const uploadPhoto = require('./users/upload-photo')
const updateUser = require('./users/update-user')
const verifyEmail = require('./users/verify-email')
const resetPassword = require('./users/reset-password')
const forgotPassword = require('./users/forgot-password')

module.exports = {
  paths: {
    '/curso': {
      ...getCursos,
      ...createCurso
    },
    '/curso/{id}': {
      ...getCurso,
      ...updateCurso,
      ...deleteCurso
    },
    '/toDo': {
      ...getToDos,
      ...createToDo
    },
    '/toDo/{id}': {
      ...getToDo,
      ...updateToDo,
      ...deleteToDo
    },
    '/historico/busqueda': {
      ...getBusquedas,
      ...createbusqueda
    },
    '/login': {
      ...login
    },
    '/registro': {
      ...registro
    },
    '/renew': {
      ...renew
    },
    '/user': {
      ...updateUser
    },
    '/user/uploadPhoto': {
      ...uploadPhoto
    },
    '/user/verify/email/:userId/:cryptoToken': {
      ...verifyEmail
    },
    '/user/reset/password/:userId/:cryptoToken': {
      ...resetPassword
    },
    '/user/forgot/password': {
      ...forgotPassword
    }
  }
}
