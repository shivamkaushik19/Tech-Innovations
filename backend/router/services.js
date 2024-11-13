const express = require('express');
const router = express.Router();
const Service = require('../model/services'); // Import the Service model

// POST route to handle form submission
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Create a new service request
    const newService = new Service({
      name,
      email,
      phone,
      message
    });

    // Save the service request to the database
    await newService.save();

    res.status(200).json({ message: 'Service request submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while submitting the service request.' });
  }
});

module.exports = router;
