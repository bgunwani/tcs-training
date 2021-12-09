
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/tcsdb', (err, db) => {
    if (err) throw err;
    console.log('Connected to Database Successfully.');
})