'use strict';

const repository = require('../repositories/extractRepository');
const helperMessage = require('../helpers/messageHelper');
const helperDate = require('../helpers/dateHelper');

exports.getExtractById = async(req, res, next) => {
    try {
        var data = await repository.getByClientId(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.getExtractToday = async(req, res, next) => {
    try {
        var data = await repository.getByDate(req.params.id, helperDate.today());
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.getExtractLastWeek = async(req, res, next) => {
    try {
        var data = await repository.getByDate(req.params.id, helperDate.lastWeek());
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.getExtractLastMonth = async(req, res, next) => {
    try {
        var data = await repository.getByDate(req.params.id, helperDate.lastMonth());
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.getExtractCustomDate = async(req, res, next) => {
    try {
        var data = await repository.getByDate(req.params.id, req.body.date);
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}