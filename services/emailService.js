/*
This service file contains two functions: 
1-getEmailFormat to determine the email format based on the domain 
2-deriveEmail to derive the email address based on the full name and domain. 
The sampleData is used to compare and find the correct email format.
*/

// Importing the sample data from the data directory
const sampleData = require('../data/sampleData');



//1-Function to determine the email format based on the domain
const getEmailFormat = (domain) => {
  // Iterate through the sample data
  for (let name in sampleData) {
    // Check if the email ends with the given domain
    if (sampleData[name].endsWith(`@${domain}`)) {
      // Extract the local part of the email and the name
      const knownEmail = sampleData[name].split('@')[0];
      const [knownFirstName, knownLastName] = name.toLowerCase().split(' ');

      // Determine if the format is 'first_name_last_name' or 'first_initial_last_name'
      if (knownEmail === `${knownFirstName}${knownLastName}`) {
        return 'first_name_last_name';
      } else if (knownEmail === `${knownFirstName.charAt(0)}${knownLastName}`) {
        return 'first_initial_last_name';
      }
    }
  }
  // Return null if no matching format is found
  return null;
};




//2- Function to derive the email address
const deriveEmail = (fullName, domain) => {
  // Get the email format for the domain
  const format = getEmailFormat(domain);
  // If no format is found, return a not found message
  if (!format) return 'Format not found';

  // Split the full name into first and last names
  const [firstName, lastName] = fullName.toLowerCase().split(' ');
  // Derive the email based on the determined format
  if (format === 'first_name_last_name') {
    return `${firstName}${lastName}@${domain}`;
  } else if (format === 'first_initial_last_name') {
    return `${firstName.charAt(0)}${lastName}@${domain}`;
  }
};


// Export the deriveEmail function for use in other parts of the application
module.exports = { deriveEmail };
