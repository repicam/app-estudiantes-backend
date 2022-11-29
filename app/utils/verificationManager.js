const crypto = require('crypto')

const initUserSeguridad = () => {
  const cryptoToken = crypto.randomBytes(16).toString('hex')
  const verificado = false
  const expirateTime = new Date().getTime() + (60000 * 60 * 12) // 12h

  return { verificado, cryptoToken, expirateTime }
}

const validateUser = () => {
  return {
    verificado: true,
    cryptoToken: null,
    expirateTime: null
  }
}

module.exports = { initUserSeguridad, validateUser }
