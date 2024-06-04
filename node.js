// imports the 'fs' module to work with the file system
const fs = require('fs');

// reads the contents of the text file
fs.readFile('planets.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  
  // splits the data by commas to get an array of planets
  const planets = data.split(', ');

  // prints each planet to the console
  planets.forEach(planet => {
    console.log(planet);
  });
});
