const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = 'w_file_0';

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`[Got]\nFile "${filePath}" saved successfully.`);
        console.log(body.trim());
        console.log(`(${body.trim().length} chars long)`);
        console.error('');
      }
    });
  } else {
    console.log('Error fetching webpage');
  }
});