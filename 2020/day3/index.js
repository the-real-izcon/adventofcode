const fs = require('fs');
const { countTrees, getProbability } = require('./trajectory');

const trajArray = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const filename = './slope.txt';
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  console.log(data);
  console.log(`Testing how many trees encounters.`);
  console.log(countTrees(data, [3, 1]));
  console.log(getProbability(data, trajArray));
});