'use strict';
const mongoose = require('mongoose');
const Extract = mongoose.model('Extract');

exports.get = async() => {
    const res = await Extract.find({}, 'client value date type');
    return res;
}

exports.getByClientId = async(id) => {
    const res = await 
    Extract
        .find({}, 'client value date type')
        .where('client').equals(id)
        .populate('client', 'name');
    return res;
}

exports.getByDate = async(id, date) => {
    const res = await 
    Extract
        .find({}, 'client value date type')
        .where('client').equals(id)
        .where('date').equals(date)
        .populate('client', 'name');
    return res;
}

exports.sumTotalValue = async(dataType) => {
    const extract = await Extract.aggregate([{ $match: { type: dataType } }])
    .group({
        _id: null,
        totalValue: { $sum: "$value" },
    });
    return extract;
}

exports.create = async(data) => {
    var extract = new Extract(data);
    await extract.save();
}