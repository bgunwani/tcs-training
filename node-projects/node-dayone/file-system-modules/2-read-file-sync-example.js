
var fs = require('fs');

// Synchronous Approach (Blocking)

var data1 = fs.readFileSync('./data/fileOne.txt', 'utf-8');
console.log(data1);

var data2 = fs.readFileSync('./data/fileTwo.txt', 'utf-8');
console.log(data2);