const { body } = require('express-validator')

const registroValidator = [
  body('email').trim().not().isEmpty().withMessage('Email is required')
    .isEmail().normalizeEmail().withMessage('Invalid email'),

  body('name').trim().not().isEmpty().withMessage('Name is required'),

  body('username').trim().not().isEmpty().withMessage('Username is required'),

  body('password').trim().not().isEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must have at least 6 characters')
]

const loginValidator = [
  body('email').trim().not().isEmpty().withMessage('Email is required')
    .isEmail().normalizeEmail().withMessage('Invalid email'),

  body('password').trim().not().isEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must have at least 6 characters')
]

const todoValidator = [
  body('title').trim().not().isEmpty().withMessage('Title is required'),
  body('description').optional({ nullable: true }).isString().withMessage('Invalid description'),
  body('completed').optional({ nullable: true }).isBoolean().withMessage('Invalid completed field')
]

const cursoValidator = [
  body('title').trim().not().isEmpty().withMessage('Title is required'),
  body('description').optional({ nullable: true }).isString().withMessage('Invalid description'),
  body('state').trim().not().isEmpty().withMessage('State is required')
    .isString().isIn(['TD', 'IP', 'FZ']).withMessage('Invalid state')
]

const modificarUsuarioValidator = [
  body('password').optional({ nullable: true }).isString().withMessage('Invalid password')
    .isLength({ min: 6 }).withMessage('Password must have at least 6 characters'),

  body('name').optional({ nullable: true }).isString().withMessage('Invalid name'),

  body('username').optional({ nullable: true }).isString().withMessage('Invalid username')
]

const guardarBusquedaValidator = [
  body('text').trim().not().isEmpty().isString().withMessage('Invalid search')
]

module.exports = { registroValidator, cursoValidator, loginValidator, todoValidator, modificarUsuarioValidator, guardarBusquedaValidator }
