const express = require('express');
const Employee = require('../models/employee.model');
const router = express();


// Request Url: http://localhost:3000/employees
router.get('/', (req, res) => {
    Employee.find((err, employees) => {
        if (err) throw err;
        res.render('employees', { employees: employees })
    });
});

// Request Url: http://localhost:3000/employees/61b35bfac1e4da220953cd7e
router.get("/:id", (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) throw err;
        res.render('employee-detail', { employee: employee });
    });
});

// Request Url: http://localhost:3000/employees
router.post('/', (req, res) => {
    var employee = new Employee(req.body);
    Employee.create(employee, (err, employee) => {
        if (err) throw err;
        res.send(employee);
    });
});

// Request Url: http://localhost:3000/employees/61b35bfac1e4da220953cd7e
router.put('/:id', (req, res) => {
    var employee = new Employee(req.body);
    Employee.findByIdAndUpdate(req.params.id, employee, (err, employee) => {
        if (err) throw err;
        res.send(employee);
    })
});

// Request Url: http://localhost:3000/employees/61b35bfac1e4da220953cd7e
router.delete('/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id, (err, employee) => {
        if (err) throw err;
        res.send(employee);
    });
});

module.exports = router;