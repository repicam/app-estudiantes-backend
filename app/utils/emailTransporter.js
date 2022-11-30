const nodemailer = require('nodemailer')

const sendVerificationMail = async (user) => {
  try {
    const mailOptions = ({
      from: 'no-reply@example.com',
      to: user.email,
      subject: 'Account Verification Link',
      text: `Hello, ${user.username} Please verify your email by
      clicking this link :
      ${process.env.DEV_HOST}:${process.env.PORT}/api/user/verify/email/${user._id}/${user.seguridad?.cryptoToken} `
    })

    const Transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    // FIXME : Error: Invalid login: 535-5.7.8 Username and Password not accepted. Learn more at 535 5.7.8  https://support.google.com/mail/?p=BadCredentials
    return await Transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}

const sendForgotPasswordMail = async (user) => {
  try {
    const mailOptions = ({
      from: 'no-reply@example.com',
      to: user.email,
      subject: 'Reset Password Link',
      text: `Hello, ${user.username}. Cambia tu password haciendo una peticion PUT con la nueva password (en 10min):
      ${process.env.DEV_HOST}:${process.env.PORT}/api/user/reset/password/${user._id}/${user.seguridad?.cryptoToken} `
    })

    const Transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    // FIXME : Error: Invalid login: 535-5.7.8 Username and Password not accepted. Learn more at 535 5.7.8  https://support.google.com/mail/?p=BadCredentials
    return await Transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}

module.exports = { sendVerificationMail, sendForgotPasswordMail }
