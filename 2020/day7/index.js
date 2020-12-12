const fs = require('fs');
const { checkRules } = require('./check');

const filename = './bag_rules.txt';
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  const bagRules = data.split(/(\r\n){2}/);
  console.log(`Searching ${bagRules.length} bag rules.`);
  console.log(checkRules(bagRules));
});