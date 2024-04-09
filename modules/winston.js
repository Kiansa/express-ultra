const winston = require('winston')

// Define the log format with a timestamp
const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  if (typeof message === 'object') {
    message = JSON.stringify(message)
  }
  return `${timestamp} [${level.toUpperCase()}]: ${message}`
})

const customLevels = {
  levels: {
    error: 0,
    info: 1,
    success: 2,
    reminder: 3,
  },
  colors: {
    error: 'red',
    info: 'yellow',
    success: 'green',
    reminder: 'magenta',
  },
}

winston.addColors(customLevels.colors)

const logger = winston.createLogger({
  levels: customLevels.levels,
  // format: winston.format.json(),
  format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
  defaultMeta: { service: 'user-service' },
  transports: [new winston.transports.File({ filename: 'error.log', level: 'error' }), new winston.transports.File({ filename: 'combined.log' })],
})

module.exports = {
  logger,
}
