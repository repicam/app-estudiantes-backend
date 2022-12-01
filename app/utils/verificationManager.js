const crypto = require('crypto')

const initUserSeguridad = () => {
  const cryptoToken = crypto.randomBytes(16).toString('hex')
  const verificado = false
  const expirateTime = new Date().getTime() + (60000 * 60) // 1h
  const restaurarPassword = false

  return { verificado, cryptoToken, expirateTime, restaurarPassword }
}

const verificarUser = (user) => {
  return {
    verificado: true,
    cryptoToken: null,
    expirateTime: null,
    restaurarPassword: user.seguridad?.restaurarPassword
  }
}

const buildForgotPassword = (user) => {
  const cryptoToken = crypto.randomBytes(16).toString('hex')

  return {
    verificado: user.seguridad?.verificado,
    cryptoToken,
    expirateTime: null,
    restaurarPassword: true
  }
}

const passwordReset = (user) => {
  return {
    verificado: user.seguridad?.verificado,
    cryptoToken: null,
    expirateTime: null,
    restaurarPassword: false
  }
}

module.exports = { initUserSeguridad, verificarUser, buildForgotPassword, passwordReset }
