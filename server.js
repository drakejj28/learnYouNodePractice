// Import the express module to create an API server
const express = require('express');

// Initialize the express application
const app = express();

// Define the port number where the server will listen for requests
const port = 3000;

// Import the employee data from the JSON file
const employees = require('./employees.json');

// Define a route to handle GET requests for the '/employees' endpoint
app.get('/employees', (req, res) => {
  // When this route is accessed, send back the entire employees array as JSON
  res.json(employees);
});

// Define a route to handle GET requests for individual employees using their employeeID
app.get('/employees/:employeeID', (req, res) => {
  // Find the employee in the array that matches the employeeID from the URL
  const employee = employees.find(emp => emp.employeeID === req.params.employeeID);
  
  // If an employee with the given employeeID exists, send back their data as JSON
  if (employee) {
    res.json(employee);
  } else {
    // If no employee matches the given employeeID, send a 404 status code and an error message
    res.status(404).send({ error: 'Employee not found' });
  }
});

// Start the server and have it listen on the specified port
app.listen(port, () => {
  // Log a message to the console once the server starts listening
  console.log(`Server running at http://localhost:${port}`);
});