'use strict';
const mongoose = require('mongoose');
const Account = mongoose.model('Account');

exports.get = async() => {
    const res = await Account.find().populate('client');
    return res;
}

exports.getById = async(id) => {
    const res = await Accound.find(id);
    return res;
}

exports.create = async(data) => {
    var account = new Account(data);
    await account.save();
}

exports.update = async(id, data) => {
    await Account.findByIdAndUpdate(id, {
        $set: {
            number: data.number,
            balance: data.balance,
            active: data.active
        }
    });
}

exports.delete = async(id) => {
    await Account.findByIdAndDelete(id);
}