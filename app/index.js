require('dotenv').config()
require('./database/db').connectDB()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs')

const userRoutes = require('./routes/userRoutes')
const cursoRoutes = require('./routes/cursoRoutes')
const todoRoutes = require('./routes/todoRoutes')
const historicoBusquedaRoutes = require('./routes/historicoBusquedaRoutes')
const favSearchesRoutes = require('./routes/favSearchRoutes')
const unknownEndpoint = require('./middlewares/unknownEndpoint')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(helmet())

app.use('/api', userRoutes)
app.use('/api/course', cursoRoutes)
app.use('/api/to-do', todoRoutes)
app.use('/api/historical/search', historicoBusquedaRoutes)
app.use('api/search/favourite', favSearchesRoutes)
app.use('/api/documentation', swaggerUI.serve, swaggerUI.setup(docs))
app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
