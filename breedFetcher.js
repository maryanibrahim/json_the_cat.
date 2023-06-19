/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
const request = require('request');

// This function fetches the description of a breed from TheCatAPI.

const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // If there's an error with the request, call the callback with the error message
    if (error) {
      callback(`Failed to fetch breed information: ${error}`, null);
      return;
    }

    const data = JSON.parse(body);

    // If the breed is not found, call the callback with an error message
    if (data.length === 0) {
      callback(`No breed found with the name "${breedName}"`, null);
      return;
    }

    // If the breed is found, call the callback with the breed description
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
