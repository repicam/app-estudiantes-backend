require('dotenv').config()
require('./database/db').connectDB()

const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const cursoRoutes = require('./routes/cursoRoutes')
const todoRoutes = require('./routes/todoRoutes')
const unknownEndpoint = require('./middlewares/unknownEndpoint')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/api', userRoutes)
app.use('/api/curso', cursoRoutes)
app.use('/api/toDo', todoRoutes)
app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Servidor inciado en el puerto ${PORT}`)
})
