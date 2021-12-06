
// Import fs module (built-in module or core module)
var fs = require('fs');

// Asynchronous Approach (Non-Blocking)
fs.readFile('./data/fileOne.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
})


// Asynchronous Approach (Non-Blocking)
fs.readFile('./data/fileTwo.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
})
