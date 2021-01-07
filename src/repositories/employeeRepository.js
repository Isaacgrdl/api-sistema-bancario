'use strict';
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

exports.get = async() => {
    const res = await Employee.find({ active: true }, 'name cpf')
    return res;
}

exports.create = async(data) => {
    var employee = new Employee(data);
    await employee.save();
}

exports.update = async(id, data) => {
    await Employee.findByIdAndUpdate(id, {$set: data});
}

exports.delete = async(id) => {
    await Employee.findByIdAndDelete(id);
}