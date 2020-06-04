const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

sgMail.setApiKey(process.env.SEND_GRID_API)

const sendMail = async (msg) => {
  try {
    let response = await sgMail.send(msg)
    return response;
  } catch (err) {
    console.log(err)

    if (err.response) {
      console.log(err.response.body)
    }
  }
}

/**
 * @desc posting to endpoint and sending mail
 * @route post /api/contactform
 * @access public no auth
 */
router.post('/', asyncHandler(async (req, res, next) => {
  // formdata request object 
  const data = req.body;
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const phone = req.body.phone;
  const message = req.body.message;

  // message object for @sendgrid/mail
  const msg = {
    "personalizations": [
      {
        "to": [
          {
            "email": 'zrdev.info@gmail.com'
          }
        ],
        "subject": subject
      }
    ],
    "from": {
      "email": email
    },
    "content": [{
      "type": "text/plain",
      "value": `
        From: ${name} \n
        Subject: ${subject} \n
        Phone: ${phone} \n
        Message: ${message} \n
      `
    }
    ]
  }

  // sending mail
  let response = await sendMail(msg);

  // sending response to frontend
  res.send({
    success: true,
    sentData: response
  });
}))

module.exports = router;