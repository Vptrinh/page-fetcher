//take two command line arguments 1: URL 2: a local file path
const request = require('request');
const fs = require('fs');

if (process.argv.length === 4) {
  let website = process.argv.slice(2)[0];
  let filePath = process.argv.slice(2)[1];

  request(website, (error, response, body) => {
    if (error) {
      throw error;
    }
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        throw error;
      }
      console.log(`\nDownloaded and saved ${body.length} bytes to ${filePath}\n`);
    });
  });
}
