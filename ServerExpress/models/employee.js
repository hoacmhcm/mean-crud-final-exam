var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    name: String,
    position: String,
    department: String,
    salary: Number
});

module.exports = mongoose.model('employee', employeeSchema);