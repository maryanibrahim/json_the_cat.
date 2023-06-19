/* eslint-disable no-console */
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  // If there's an error, log it
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    // If there's no error, log the breed description
    console.log(desc);
  }
});
