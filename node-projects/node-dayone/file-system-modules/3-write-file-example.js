
var fs = require('fs');

// Writing File Async (Non-Blocking)
fs.writeFile('./data/dataOne.txt', 'Hello World', function (err) {
    if (err) throw err;
    console.log('Content Written to the file successfully.');
});

// Appending File Async (Non-Blocking)
fs.appendFile('./data/dataOne.txt', 'Hello Everyone', function (err) {
    if (err) throw err;
    console.log('Content Written to the file successfully.');
})

// Writing File Sync (Blocking)
fs.writeFileSync('./data/dataTwo.txt', "Hello Everyone");
console.log("Content written to the file successfully.");