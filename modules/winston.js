const winston = require('winston')

// Define the log format with a timestamp
const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`
})

const logger = winston.createLogger({
  level: 'info',
  // format: winston.format.json(),
  format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
  defaultMeta: { service: 'user-service' },
  transports: [new winston.transports.File({ filename: 'error.log', level: 'error' }), new winston.transports.File({ filename: 'combined.log' })],
})

module.exports = {
  logger,
  // Export other common modules here
}
