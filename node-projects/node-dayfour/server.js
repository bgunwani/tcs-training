var mongoose = require('mongoose');

// Connect using Callback:

mongoose.connect('mongodb://localhost:27017/tcsdb', (err, db) => {
    if (err) throw err;
    console.log('Connected to Database Successfully.');
});

// ---------------------------------------------------------------- //

// Connect using promises:

mongoose.connect('mongodb://localhost:27017/tcsdb')
    .then(() => { console.log('Successfully connected to database.'); })
    .catch((err) => { console.log(err) })