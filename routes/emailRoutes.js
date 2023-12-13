const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

//  POST route 
router.post('/derive-email', emailController.deriveEmailController);


module.exports = router;
