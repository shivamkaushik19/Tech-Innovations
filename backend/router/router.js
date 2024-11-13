
const express = require('express');
const router = express.Router();
const Contact = require('../model/landingcontact');

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await newContact.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while saving data' });
  }
});

module.exports = router;
