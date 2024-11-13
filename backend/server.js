
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/router');
const getInTouchRouter = require('./router/getintouch');
const courseRouter = require('./router/course');
const serviceRouter = require('./router/services');


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb+srv://shivambrahman:shivambrahman@techinnovations.vc8dr.mongodb.net/Techinnovations?retryWrites=true&w=majority&appName=Techinnovations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
 app.use('/api/contact', router);
app.use('/api/GetInTouch', getInTouchRouter);
app.use('/api/Course', courseRouter);
app.use('/api/services', serviceRouter);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
