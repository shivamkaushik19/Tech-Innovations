const mongoose = require('mongoose');

// Define the schema for course data
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Field is required
    trim: true // Removes any extra whitespace
  },
  email: {
    type: String,
    required: true, // Field is required
    trim: true, // Removes any extra whitespace
    lowercase: true, // Convert email to lowercase

  },
  phone: {
    type: String,
    required: true, // Field is required
    trim: true // Removes any extra whitespace
  },
  course: {
    type: String,
    required: true, // Field is required
    trim: true // Removes any extra whitespace
  },
  date: {
    type: Date,
    default: Date.now // Default value for the date field
  }
});

// Create and export the model based on the schema
module.exports = mongoose.model('Course', courseSchema);

