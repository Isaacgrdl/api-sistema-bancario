'use strict';
const mongoose = require('mongoose');
const Client = mongoose.model('Client');

exports.get = async() => {
    const res = await Client.find({ active: true }, 'name cpf')
    return res;
}

exports.create = async(data) => {
    var client = new Client(data);
    await client.save();
}

exports.update = async(id, data) => {
    await Client.findByIdAndUpdate(id, {
        $set: {
            name: data.name
        }
    });
}

exports.delete = async(id) => {
    await Client.findByIdAndDelete(id);
}