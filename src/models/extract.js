'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const helperDate = require('../helpers/dateHelper');

const schema = new Schema({
    date: {
        type: String,
        default: helperDate.today()
    },
    type: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
        default: 1
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        require: true,
    }
});

module.exports = mongoose.model('Extract', schema);