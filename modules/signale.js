const { Signale } = require('signale')

const options = {
  types: {
    info: {
      badge: 'ℹ️',
      color: 'blue',
      label: 'info',
    },
    error: {
      badge: '❌',
      color: 'red',
      label: 'error',
      logLevel: 'error',
    },
    success: {
      badge: '✅',
      color: 'green',
      label: 'success',
    },
    reminder: {
      badge: '******',
      color: 'magenta',
      label: 'reminder',
    },
  },
}

const signale = new Signale(options)
signale.config({
  displayFilename: true,
  displayTimestamp: true,
  displayDate: false,
  underlineLabel: false,
  uppercaseLabel: true,
})

module.exports = {
  signale,
}
