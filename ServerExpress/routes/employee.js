var express = require('express');
var router = express.Router();
var employee = require('../models/employee');


//Get all employee
router.get('/', function (req, res, next) {
    employee.find(function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

//Get employee by id
router.get('/:id', function (req, res, next) {
    employee.findById(req.params.id, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
})

//Add new employee
router.post('/', function (req, res, next) {
    employee.create(req.body, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

//update employee
router.put('/:id', function (req, res, next) {
    employee.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

//delete employee
router.delete('/:id', function (req, res, next) {
    employee.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

module.exports = router;