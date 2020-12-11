const fs = require('fs');
const { validate } = require('./scan');

const filename = './boarding_passes.txt';
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  const boardingPasses = data.split(/(\r\n)+/);
  console.log(`Scanning ${boardingPasses.length} boarding passes.`);
  console.log(validate(boardingPasses));
});