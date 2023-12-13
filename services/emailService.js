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
 
  for (let name in sampleData) {
    if (sampleData[name].endsWith(`@${domain}`)) {
      const knownEmail = sampleData[name].split('@')[0];
      const [knownFirstName, knownLastName] = name.toLowerCase().split(' ');

      if (knownEmail === `${knownFirstName}${knownLastName}`) {
        return 'first_name_last_name';
      } else if (knownEmail === `${knownFirstName.charAt(0)}${knownLastName}`) {
        return 'first_initial_last_name';
      }
    }
  }
  
  return null;
};



//2- Function to derive the email address
const deriveEmail = (fullName, domain) => {
  const format = getEmailFormat(domain);
  
  if (!format) return 'Format not found';

  const [firstName, lastName] = fullName.toLowerCase().split(' ');

  if (format === 'first_name_last_name') {
    return `${firstName}${lastName}@${domain}`;
  } else if (format === 'first_initial_last_name') {
    return `${firstName.charAt(0)}${lastName}@${domain}`;
  }
};

module.exports = { deriveEmail };
