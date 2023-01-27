const nodemailer = require('nodemailer')

const Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD
  }
})

const sendVerificationMail = async (user, host) => {
  try {
    const mailOptions = ({
      from: process.env.EMAIL_ACCOUNT,
      to: user.email,
      subject: 'Account Verification Link',
      text: `Hello, ${user.username} Porfavor, verifica su email haciendo click en el enlace:
      ${host}/api/user/verify/${user.seguridad?.cryptoToken} `
    })

    return await Transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}

const sendForgotPasswordMail = async (user) => {
  try {
    const mailOptions = ({
      from: process.env.EMAIL_ACCOUNT,
      to: user.email,
      subject: 'Reset Password Warning',
      text: `Hello, ${user.username}. Este es un mensaje de información porque ha solicitado un cambio de contraseña.
      Hasta que no la cambie, su cuenta quedará bloqueada`
    })

    return await Transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}

const sendChangedPasswordMail = async (user) => {
  try {
    const mailOptions = ({
      from: process.env.EMAIL_ACCOUNT,
      to: user.email,
      subject: 'Reset Password Info',
      text: `Hello, ${user.username}. Este es un mensaje de confirmación del cambio de password`
    })

    return await Transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}

module.exports = { sendVerificationMail, sendForgotPasswordMail, sendChangedPasswordMail }
