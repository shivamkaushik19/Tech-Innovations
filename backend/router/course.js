const express = require('express');
const router = express.Router();
const Course = require('../model/course'); // Import the Course model

// Handle POST requests to /api/course
router.post('/', async (req, res) => {
  const { name, email, phone, course } = req.body;
   console.log(req.body)
  
  try {
    // Create a new Course instance
    const newCourse = new Course({
      name,
      email,
      phone,
      course,
    });

    // Save the new Course to the database
    await newCourse.save();
    console.log("Data saved successfully"); // Debugging line

    // Respond with success message
    res.status(200).json({ message: 'Course submission successful!' });
  } catch (err) {
    console.error('Error saving course:', err); // Debugging line
    res.status(500).json({ error: 'An error occurred while saving the course.' });
  }
});

module.exports = router;

