const express = require('express')
const app = express()
const cors = require('cors')
const { logger } = require('./modules/winston')
require('dotenv').config({ path: './.env' })
const port = parseInt(process.env.APP_PORT, 10)
const corsDomains = process.env.CORS_ORIGIN.split(',')

// import routes
const contact = require('./routes/contact')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors({ origin: corsDomains }))

// use routes
app.use('/contact', contact)

// for dev
app.listen(port, () => console.log(`Listening on port ${port}!`))

// for production
// app.listen(port, () => logger.info(`Listening on port ${port}!`))
