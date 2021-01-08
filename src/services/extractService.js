'use strict';
const repository = require('../repositories/extractRepository');

exports.extractSave = async(data) => {
    await repository.create(data);
}