const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
  const { name, email , phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vishaly1624@gmail.com',
      pass: 'azmzuoporcicpomb'
    }
  });

  const mailOptions = {
    from: email,
    to: 'vishaly1624@gmail.com',
    subject: 'New Contact Form Message',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send({ success: true });
  } catch (error) {
    res.send({ success: false, error });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));