'use strict';
const mongoose = require('mongoose');
const Client = mongoose.model('Client');

exports.get = async() => {
    const res = await Client.find({ active: true }, 'name cpf')
    return res;
}

exports.getValidate = async(id) => {
    const res = await Client.findById(id);
    return res;
}

exports.create = async(data) => {
    var client = new Client(data);
    await client.save();
}

exports.update = async(id, data) => {
    await Client.findByIdAndUpdate(id, {$set: data});
}

exports.inactive = async(id, data) => {
    await Client.findByIdAndUpdate(id, {$set: data});
}