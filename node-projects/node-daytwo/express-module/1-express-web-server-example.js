
// Import express Module:
var express = require('express');
var fs = require('fs');
var app = express();

const courses = [
    { "id": 101, "name": "Core Java" },
    { "id": 102, "name": "Advance Java" },
    { "id": 103, "name": "NodeJS" },
    { "id": 104, "name": "Angular" },
    { "id": 105, "name": "AWS" },
]

// Request URL: http://localhost:3000
app.get('/', (req, res) => {
    res.send('Hello Everyone!!');
})

// Request URL: http://localhost:3000/courses
app.get('/courses', (req, res) => {
    res.send(courses);
})

// Request URL: http://localhost:3000/allcourses
app.get('/allcourses', (req, res) => {
    fs.readFile('./data/db.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    })
})

// Listen Incoming Requests on Defined Port
app.listen(3000, () => {
    console.log('Server is running at port 3000!!')
})
