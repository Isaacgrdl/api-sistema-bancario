'use strict';

const repository = require('../repositories/clientRepository');
const helperMessage = require('../helpers/messageHelper');
const service = require('../services/clientService');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
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
        await repository.update(req.userId, req.body);
        helperMessage.message(res, 200, 'Cliente atualizado com sucesso!');
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
};

exports.inactive = async(req, res, next) => {
    try {
        const data = {
            active : false
        }
        await repository.inactive(req.userId, data);
        helperMessage.message(res, 200, 'Cliente inativado com sucesso!');
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