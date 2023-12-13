const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS and JSON parsing for incoming requests
app.use(cors());
app.use(express.json());

// Sample data mapping names to their email addresses
const sampleData = {
  "Jane Doe": "jdoe@babbel.com",
  "Jay Arun": "jayarun@linkedin.com",
  "David Stein": "davidstein@google.com",
  "Mat Lee": "matlee@google.com",
  "Marta Dahl": "mdahl@babbel.com",
  "Vanessa Boom": "vboom@babbel.com"
};

// Function to determine the email format for a given domain
const getEmailFormat = (domain) => {
  for (let name in sampleData) {
    if (sampleData[name].endsWith(`@${domain}`)) {
      const knownEmail = sampleData[name].split('@')[0];
      const [knownFirstName, knownLastName] = name.toLowerCase().split(' ');
      if (knownEmail === `${knownFirstName}${knownLastName}`) return 'first_name_last_name';
      if (knownEmail === `${knownFirstName.charAt(0)}${knownLastName}`) return 'first_initial_last_name';
    }
  }
  return null;
};

// Function to derive the email address based on the full name and domain
const deriveEmail = (fullName, domain) => {
  const format = getEmailFormat(domain);
  if (!format) return 'Format not found';

  const [firstName, lastName] = fullName.toLowerCase().split(' ');
  if (format === 'first_name_last_name') return `${firstName}${lastName}@${domain}`;
  if (format === 'first_initial_last_name') return `${firstName.charAt(0)}${lastName}@${domain}`;
};

// POST route to handle email derivation requests
app.post('/derive-email', async (req, res) => {
  const { fullName, domain } = req.body;
  const email = deriveEmail(fullName, domain);
  res.json({ email });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
