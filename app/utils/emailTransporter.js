const nodemailer = require('nodemailer')

const sendVerificationMail = async (user) => {
  try {
    const mailOptions = ({
      from: process.env.EMAIL_ACCOUNT,
      to: user.email,
      subject: 'Account Verification Link',
      text: `Hello, ${user.username} Porfavor, verifica su email haciendo click en el enlace:
      ${process.env.DEV_HOST}:${process.env.PORT}/api/user/verify/email/${user._id}/${user.seguridad?.cryptoToken} `
    })

    const Transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
      }
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
      text: `Hello, ${user.username}. Ha solicitado un cambio de contraseña porque ha olvidado la anterior.
      Si no has sido tu, no haga caso a este mensaje`
    })

    const Transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    return await Transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}

module.exports = { sendVerificationMail, sendForgotPasswordMail }
