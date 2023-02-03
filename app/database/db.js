const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(process.env.BBDD_URI)
    .then(() => { console.log('BBDD conectada') })
    .catch(err => { console.error(err) })
}

const disconnectDB = () => {
  mongoose.disconnect()
    .then(() => { console.log('BBDD desconectada') })
    .catch(err => { console.error(err) })
}

module.exports = { connectDB, disconnectDB }
