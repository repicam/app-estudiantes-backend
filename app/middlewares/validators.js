const { body } = require('express-validator')

const bodyValidator = [
  body('email').trim().not().isEmpty().withMessage('Email es obligatorio')
    .isEmail().normalizeEmail().withMessage('Introduce un email valido'),

  body('name').trim().not().isEmpty().withMessage('Name es obligatorio'),

  body('username').trim().not().isEmpty().withMessage('Username es obligatorio'),

  body('password').trim().not().isEmpty().withMessage('Password es obligatorio')
    .isLength({ min: 6 }).withMessage('Password debe tener al menos 6 caracteres')
]

module.exports = { bodyValidator }
