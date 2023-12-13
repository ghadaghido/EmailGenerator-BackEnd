const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Define the POST route for email derivation
router.post('/derive-email', emailController.deriveEmailController);

// Export the router
module.exports = router;
