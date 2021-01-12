'use strict';
const mongoose = require('mongoose');
const Account = mongoose.model('Account');

exports.get = async() => {
    const res = await Account.find().populate('client');
    return res;
}

exports.getById = async(id) => {
    const res = await Account.findById(id);
    return res;
}

exports.getNumAccounts = async(req, res, next) => {
    const data = await Account.countDocuments({});
    return data;
}

exports.getNumAccountsActive = async(req, res, next) => {
    const data = await Account.countDocuments({'active': true});
    return data;
}

exports.getNumAccountsClosed = async(req, res, next) => {
    const data = await Account.countDocuments({'active': false});
    return data;
}

exports.create = async(data) => {
    var account = new Account(data);
    await account.save();
}

exports.update = async(id, data) => {
    await Account.findByIdAndUpdate(id, {$set: data});
}

exports.updateBalance = async(id, newBalance) => {
    await Account.findByIdAndUpdate(id, {
        $set: {
            balance : newBalance
        }
    });
}

exports.delete = async(id) => {
    await Account.findByIdAndDelete(id);
}