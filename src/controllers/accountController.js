'use strict';

const repository = require('../repositories/accountRepository');
const helperMessage = require('../helpers/messageHelper');

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

exports.message = (res, statusCode, message) => {
    return res.status(statusCode).send({
        message: message
    });
}