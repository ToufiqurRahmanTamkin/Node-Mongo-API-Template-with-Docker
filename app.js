const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())

require('dotenv').config()
const dbConfig = require('./configs/db.config')
const multerConfig = require('./configs/multer.config')
const routes = require('./routes/index')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

const connectDatabase = async () => {
  try {
    await mongoose.connect(dbConfig.URI)
    console.log(`Connected to mongodb database! & port: ${process.env.PORT}`)
  } catch (error) {
    console.error('Error connecting to database:', error.message)
    console.log('Retrying connection...')
    setTimeout(connectDatabase, 5000)
  }
}
connectDatabase()
routes(app)

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.json({ error: err.message })
})

module.exports = app