const mongoose = require('mongoose')

const connection = `mongodb+srv://${process.env.BBDD_USER}:${process.env.BBDD_PASS}@cluster0.k30iuzc.mongodb.net/${process.env.BBDD_CLUSTER}?retryWrites=true&w=majority`

const connectDB = () => {
  mongoose.connect(connection)
    .then(() => { console.log('BBDD conectada') })
    .catch(err => { console.error(err) })
}

const disconnectDB = () => {
  mongoose.disconnect()
    .then(() => { console.log('BBDD desconectada') })
    .catch(err => { console.error(err) })
}

module.exports = { connectDB, disconnectDB }
