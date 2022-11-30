const crypto = require('crypto')

const initUserSeguridad = () => {
  const cryptoToken = crypto.randomBytes(16).toString('hex')
  const verificado = false
  const expirateTime = new Date().getTime() + (60000 * 60 * 12) // 12h
  const restaurarPassword = false

  return { verificado, cryptoToken, expirateTime, restaurarPassword }
}

const validateUser = () => {
  return {
    verificado: true,
    cryptoToken: null,
    expirateTime: null,
    restaurarPassword: false
  }
}

const buildForgotPassword = () => {
  const cryptoToken = crypto.randomBytes(16).toString('hex')
  const expirateTime = new Date().getTime() + 600000 // 10min

  return {
    verificado: false,
    cryptoToken,
    expirateTime,
    restaurarPassword: true
  }
}

module.exports = { initUserSeguridad, validateUser, buildForgotPassword }
