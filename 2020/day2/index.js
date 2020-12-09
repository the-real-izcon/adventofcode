const fs = require('fs');
const { validate } = require('./valid');

const filename = './passwords.txt';
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  const passwords = data.split(/[\r\n]+/);
  console.log(`Testing how many passwords are valid of ${passwords.length}.`);
  console.log(validate(passwords));
  console.log(validate(passwords, 'toboggan'));
});