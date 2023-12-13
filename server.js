require('dotenv').config(); // Load environment variables from .env file
/*This make it easily change settings like the port number without altering the codebase, just by updating the .env file.*/

const app = require('./App'); 

// Using the PORT from .env, default to 3000 if not set
//This code ensures the server listens on the port defined in the .env file,
// or uses 3000 as a default if no port is specified.

const port = process.env.PORT || 3000;


// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
