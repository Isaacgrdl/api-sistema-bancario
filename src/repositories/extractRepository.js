'use strict';
const mongoose = require('mongoose');
const Extract = mongoose.model('Extract');

exports.get = async() => {
    const res = await Extract.find();
    return res;
}

exports.getByClientId = async(id) => {
    const res = await 
    Extract
        .find()
        .where('client').equals(id)
        .populate('client', 'name');
    return res;
}

exports.getByDate = async(id, date) => {
    const res = await 
    Extract
        .find()
        .where('client').equals(id)
        .where('date').equals(date)
        .populate('client', 'name');
    return res;
}

exports.create = async(data) => {
    var extract = new Extract(data);
    await extract.save();
}