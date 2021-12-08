const request = require('request');
const express = require('express');
const app = express();

// Configuring View (Template) Engine
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/home', (req, res) => {
    res.render('home', { message: 'TCS Admin Portal' });
})

app.get('/movies', (req, res) => {
    request('https://ghibliapi.herokuapp.com/films', (err, response, body) => {
        if (err) throw err;
        const data = JSON.parse(body);
        //res.send(data);
        res.render('movies', { movies: data })
    })
})

app.listen(3000, () => {
    console.log('The server is running at port 3000!!');
})