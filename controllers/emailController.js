// Importing the email service which contains the logic for email derivation
const emailService = require('../services/emailService');

// Controller function for deriving an email address
const deriveEmailController = async (req, res) => {
  // Extracting fullName and domain from the request body
  const { fullName, domain } = req.body;

  // Calling the deriveEmail function from the email service
  const email = emailService.deriveEmail(fullName, domain);

  // Sending back the derived email in the response
  res.json({ email });
};

// Exporting the controller function to be used in routes
module.exports = { deriveEmailController };
