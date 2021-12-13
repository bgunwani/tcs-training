const express = require('express');
const app = express();
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index.routes');
const employeeRoutes = require('./routes/employee.routes');

// BodyParser
app.use(express.json());

// Configuring Routes
app.use('/', indexRoutes);
app.use('/employees', employeeRoutes);

// Configuring View (Template) Engine
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost:27017/demodb')
    .then(() => { console.log('Successfully Connected to Database!!') })
    .catch((error) => { console.log(error) })


app.listen(3000, () => {
    console.log('The server is running at port 3000');
})