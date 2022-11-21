const { body } = require('express-validator')

const bodyValidator = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
]

module.exports = { bodyValidator }
