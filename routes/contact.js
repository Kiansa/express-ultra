const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const { logger } = require('../modules/winston')

// contact form request
router.post('/', async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host: '',
      port: 465,
      secure: true,
      auth: {
        user: '',
        pass: '',
      },
    })

    await transporter.sendMail({
      from: {
        name: 'Example Contact Form',
        address: 'no-reply@example.com', // sender address
      },
      to: 'hello@example.com',
      replyTo: req.body.email,
      subject: `New message from ${req.body.name}`,
      text: `Message: \n\n${req.body.message}\n\n Phone Number: ${req.body.phone}`,
    })

    logger.info('Contact form sent to admin email successfully!')
    res.status(200).send('success')
  } catch (error) {
    logger.error('Error contact email:', error.message)
    res.status(500).send('An error occurred while sending contact form')
  }
})
module.exports = router
