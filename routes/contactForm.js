const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


// @route       post api/contactform
// @desc        post data from Contact Form
// @access      public

router.post('/', (req, res) => {

  const data = req.body;

  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const phone = req.body.phone;
  const message = req.body.message;


  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_SERVICE,
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.GMAIL_PW
    }
  });


  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_RECEIVER,
    subject: subject,
    text: `
    FROM: ${name} - ${email} with Phonenumber: ${phone} \n
    SUBJECT: ${subject} \n \n
    Message: ${message}
    `
  }

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log(`Email sent: ${info.response}`);
  //   }
  // })

  res.send({
    success: true,
    sentData: data
  });
})

module.exports = router;