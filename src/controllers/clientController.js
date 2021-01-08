'use strict';

const repository = require('../repositories/clientRepository');
const repositoryExtract = require('../repositories/extractRepository');
const helperMessage = require('../helpers/messageHelper');
const helperDate = require('../helpers/dateHelper');
const service = require('../services/clientService');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.getExtractById = async(req, res, next) => {
    try {
        var data = await repositoryExtract.getByClientId(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.getExtractToday = async(req, res, next) => {
    try {
        var data = await repositoryExtract.getByDate(req.params.id, helperDate.today());
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.getExtractLastWeek = async(req, res, next) => {
    try {
        var data = await repositoryExtract.getByDate(req.params.id, helperDate.lastWeek());
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.getExtractLastMonth = async(req, res, next) => {
    try {
        var data = await repositoryExtract.getByDate(req.params.id, helperDate.lastMonth());
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.getExtractCustomDate = async(req, res, next) => {
    try {
        var data = await repositoryExtract.getByDate(req.params.id, req.body.date);
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body);
        helperMessage.message(res, 201,'Cliente cadastrado com sucesso!' )
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
};

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        helperMessage.message(res, 200, 'Cliente atualizado com sucesso!');
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id);
        helperMessage.message(res, 200, 'Cliente removido com sucesso!');
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
};

exports.withdraw = async(req, res, next) => {
    service.withdraw(res, req.body.id, req.body.balanceToBeWithdrawn);
}

exports.deposit = async(req, res, next) => {
    service.deposit(res, req.body.id, req.body.balanceToBeDeposit);
}