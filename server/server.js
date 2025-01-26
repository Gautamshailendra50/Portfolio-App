const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Contact = require('./contactModel');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const MONGO_URI = 'mongodb://localhost:27017/Portfolio'; // Replace with your MongoDB connection string
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Set up Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to another email service
  auth: {
    user: 'gautamshailendra50@gmail.com', // Replace with your email address
    pass: 'kvzm xbzf nujs aulc', // Replace with your email password (or app-specific password if using Gmail)
  },
});

// Routes

// POST route to save contact form data and send email
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    // Validate input
    if (!name || !email || !mobile || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, mobile, message });
    await newContact.save();

    // Set up email details
    const mailOptions = {
      from: 'Ratikagautam175@gmail.com', // Replace with your email address
      to: 'gautamshailendra50@gmail.com', // Replace with the recipient's email address
      subject: 'New Contact ',
      text: `You have a new contact Request :

      Name: ${name}
      Email: ${email}
      Mobile: ${mobile}
      Message: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    // Respond to the client
    res.status(201).json({ success: true, message: 'Contact request sent successfully and email sent' });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
