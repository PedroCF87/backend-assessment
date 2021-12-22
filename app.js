const express = require('express')
const BodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const { errors } = require('celebrate')

const indexRouter = require('./routes/index')
const itensRouter = require('./routes/itens')
const ordersRouter = require('./routes/orders')

const app = express()

app.use(cors())
app.use(logger('dev'))
// app.use(express.json())
app.use(BodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/itens', itensRouter)
app.use('/orders', ordersRouter)

app.use(errors())

module.exports = app
