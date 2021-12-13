const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Employee = require('./models/employee.model');

app.use(express.json());    // BodyParser

mongoose.connect('mongodb://localhost:27017/demodb')
    .then(() => { console.log('Successfully Connected to Database!!') })
    .catch((error) => { console.log(error) })

app.get('/', (req, res) => {
    res.send('Express Node Mongoose Project!!')
});

app.get('/employees', (req, res) => {
    Employee.find((err, employees) => {
        if (err) throw err;
        res.send(employees);
    });
});

app.get("/employees/:id", (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) throw err;
        res.send(employee);
    });
});

app.post('/employees', (req, res) => {
    var employee = new Employee(req.body);
    Employee.create(employee, (err, employee) => {
        if (err) throw err;
        res.send(employee);
    });
});

app.put('/employees', (req, res) => {
    res.send('Updating Existing Employee');
});

app.delete('/employees', (req, res) => {
    res.send('Deleting Existing Employee');
});

app.listen(3000, () => {
    console.log('The server is running at port 3000');
})