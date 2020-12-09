const fs = require('fs');
const { validate } = require('./valid');

const filename = './passports.txt';
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  const passports = data.split(/(\r\n){2}/);
  console.log(`Testing how many passports are valid of ${passports.length}.`);
  console.log(validate(passports));
  console.log(validate(passports, true));
});