const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    let count = 0;

    films.forEach((film) => {
      film.characters.forEach((character) => {
        if (character.includes(`/${characterId}/`)) {
          count++;
        }
      });
    });

    console.log(count);
  } else {
    console.log('Error fetching movie data');
  }
});