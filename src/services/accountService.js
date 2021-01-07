'use strict';

const mongoose = require('mongoose');
const Account = mongoose.model('Account');
const repository = require('../repositories/accountRepository');

exports.withdraw = async(req, res, next) => {
    
}