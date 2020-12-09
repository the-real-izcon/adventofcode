const fs = require('fs');
const { fix2, fix3 } = require('./fix');

const filename = './report.txt';
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  const report = data.split(/\s+/).map(x=>+x);
  console.log(`This report contains ${report.length} items.`);
  console.log(fix2(report));
  console.log(fix3(report));
});