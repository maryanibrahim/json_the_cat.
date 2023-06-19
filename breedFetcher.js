/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const request = require('request');

// Get the breed name from the command-line arguments
const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  // Handle request errors
  if (error) {
    console.error(`Failed to fetch breed information: ${error}`);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(`No breed found with the name "${breedName}"`);
    return;
  }

  console.log(data[0].description);
});
