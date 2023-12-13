// Importing the email service 
const emailService = require('../services/emailService');

// Controller 
const deriveEmailController = async (req, res) => {
  
  const { fullName, domain } = req.body;

 
  const email = emailService.deriveEmail(fullName, domain);

  
  res.json({ email });
};


module.exports = { deriveEmailController };
