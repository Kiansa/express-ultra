const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({ path: './.env' })
const port = parseInt(process.env.APP_PORT, 10)
const corsDomains = process.env.CORS_ORIGIN.split(',')
const { logger } = process.env.MODE === 'development' ? require('./modules/signale') : require('./modules/winston') // winston logger for production and signale logger for development

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors({ origin: corsDomains }))

// use routes
app.use('/contact', require('./routes/contact'))

// reminder
if (process.env.MODE === 'development') {
  logger.reminder(`\n\n For production: \n - Double check .env file \n`)
}

logger.info(`Listening on port ${port}!`)
// for dev
app.listen(port, () => logger.success(`Listening on port ${port}!`))
