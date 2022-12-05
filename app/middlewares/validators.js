const { body } = require('express-validator')

const registroValidator = [
  body('email').trim().not().isEmpty().withMessage('Email es obligatorio')
    .isEmail().normalizeEmail().withMessage('Introduce un email valido'),

  body('name').trim().not().isEmpty().withMessage('Name es obligatorio'),

  body('username').trim().not().isEmpty().withMessage('Username es obligatorio'),

  body('password').trim().not().isEmpty().withMessage('Password es obligatorio')
    .isLength({ min: 6 }).withMessage('Password debe tener al menos 6 caracteres')
]

const loginValidator = [
  body('email').trim().not().isEmpty().withMessage('Email es obligatorio')
    .isEmail().normalizeEmail().withMessage('Introduce un email valido'),

  body('password').trim().not().isEmpty().withMessage('Password es obligatorio')
    .isLength({ min: 6 }).withMessage('Password debe tener al menos 6 caracteres')
]

const todoValidator = [
  body('titulo').trim().not().isEmpty().withMessage('Titulo es obligatorio'),
  body('descripcion').optional({ nullable: true }).isString().withMessage('Descripción incorrecto'),
  body('completado').optional({ nullable: true }).isBoolean().withMessage('Completado incorrecto')
]

const cursoValidator = [
  body('titulo').trim().not().isEmpty().withMessage('Titulo es obligatorio'),
  body('descripcion').optional({ nullable: true }).isString().withMessage('Descripción incorrecto'),
  body('estado').trim().not().isEmpty().withMessage('Estado es obligatorio')
    .isString().isIn(['PH', 'EP', 'FZ']).withMessage('Estado incorrecto')
]

const modificarUsuarioValidator = [
  body('password').optional({ nullable: true }).isString().withMessage('Password incorrecto')
    .isLength({ min: 6 }).withMessage('Password debe tener al menos 6 caracteres'),

  body('name').optional({ nullable: true }).isString().withMessage('Name incorrecto'),

  body('username').optional({ nullable: true }).isString().withMessage('Username incorrecto')
]

const guardarBusquedaValidator = [
  body('busqueda').trim().not().isEmpty().isString().withMessage('Busqueda incorrecto')
]

module.exports = { registroValidator, cursoValidator, loginValidator, todoValidator, modificarUsuarioValidator, guardarBusquedaValidator }
