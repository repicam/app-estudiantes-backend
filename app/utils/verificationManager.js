const crypto = require('crypto')

const initUserSeguridad = () => {
  const cryptoToken = crypto.randomBytes(16).toString('hex')
  const verificado = false
  const restaurarPassword = false

  return { verificado, cryptoToken, restaurarPassword }
}

const verificarUser = (user) => {
  return {
    verificado: true,
    cryptoToken: null,
    restaurarPassword: user.seguridad?.restaurarPassword
  }
}

const buildForgotPassword = (user) => {
  const cryptoToken = crypto.randomBytes(16).toString('hex')

  return {
    verificado: user.seguridad?.verificado,
    cryptoToken,
    restaurarPassword: true
  }
}

const passwordReset = (user) => {
  return {
    verificado: user.seguridad?.verificado,
    cryptoToken: null,
    restaurarPassword: false
  }
}

module.exports = { initUserSeguridad, verificarUser, buildForgotPassword, passwordReset }
