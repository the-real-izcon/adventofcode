const fs = require('fs');
const { checkCustoms } = require('./check');

const filename = './answers.txt';
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  const answersList = data.split(/(\r\n){2}/);
  console.log(`Checking ${answersList.length} customs answers.`);
  console.log(checkCustoms(answersList));
});