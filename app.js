const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({ path: './.env' })
const port = parseInt(process.env.APP_PORT, 10)
const corsDomains = process.env.CORS_ORIGIN.split(',')
const { logger } = require('./modules/winston') // winston logger for production
const { signale } = require('./modules/signale') // signale logger for development

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors({ origin: corsDomains }))

// use routes
app.use('/contact', require('./routes/contact'))

// reminder
signale.reminder(`\n\n For production: \n - Exclude /modules folder from search then find and replace all "signale." with "logger."\n - Double check .env file \n`)

// for dev
app.listen(port, () => signale.success(`Listening on port ${port}!`))
