'use strict';

const repository = require('../repositories/accountRepository');
const repositoryExtract = require('../repositories/extractRepository');
const helperMessage = require('../helpers/messageHelper');
const helperDate = require('../helpers/dateHelper');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.body.id);
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.reportAccountsRegistered = async(req, res, next) => {
    try {
        var data = await repository.getNumAccounts();
        if(!data){
            helperMessage.message(res, 500, 'Falha ao processar sua requisição');
        } else {
            helperMessage.message(res, 200, 'Registered Accounts: ' + data);
        }
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.reportActiveAccounts = async(req, res, next) => {
    try {
        var data = await repository.getNumAccountsActive();
        if(!data){
            helperMessage.message(res, 500, 'Falha ao processar sua requisição');
        } else {
            helperMessage.message(res, 200, 'Open Accounts: ' + data);
        }
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.reportClosedAccounts = async(req, res, next) => {
    try {
        var data = await repository.getNumAccountsClosed();
        if(!data){
            helperMessage.message(res, 500, 'Falha ao processar sua requisição');
        } else {
            helperMessage.message(res, 200, 'Closed Accounts: ' + data);
        }
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.reportTotalDeposit = async(req, res, next) => {
    try {
        var data = await repositoryExtract.sumTotalValue('Deposito');
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.reportTotalWithdraw = async(req, res, next) => {
    try {
        var data = await repositoryExtract.sumTotalValue('Saque');
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body);
        helperMessage.message(res, 201,'Conta cadastrado com sucesso!' )
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
};

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        helperMessage.message(res, 200, 'Conta atualizado com sucesso!');
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id);
        helperMessage.message(res, 200, 'Conta removido com sucesso!');
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
};
