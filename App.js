// Importing necessary modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');

// Initializing an Express application
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Using the email routes defined in emailRoutes.js
app.use(emailRoutes);

// Exporting the app for use in other files, like server.js
module.exports = app;
