var express = require('express');
var router = express.Router();
var employee = require('../models/employee');


router.get('/', function (req, res, next) {
    employee.find(function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

//
router.get('/:id', function (req, res, next) {
    employee.findById(req.params.id, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
})

router.post('/', function (req, res, next) {
    employee.create(req.body, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

router.put('/:id', function (req, res, next) {
    employee.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

router.delete('/:id', function (req, res, next) {
    employee.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});



module.exports = router;