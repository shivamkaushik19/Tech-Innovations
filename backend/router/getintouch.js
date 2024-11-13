// router/getInTouchRouter.js
const express = require('express');
const router = express.Router();
const GetInTouch = require('../model/getintouch'); 

// POST route to handle form submissions
router.post('/', async (req, res) => {
  const { name, email, message } = req.body; // Get form data from the request body

  try {
    // Create a new instance of the GetInTouch model
    const newMessage = new GetInTouch({
      name,
      email,
      message,
    });

    // Save the message to the database
    await newMessage.save();
    res.status(200).json({ message: 'Message submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while saving the message.' });
  }
});

module.exports = router;
