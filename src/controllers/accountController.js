'use strict';

const repository = require('../repositories/accountRepository');
const helperMessage = require('../helpers/messageHelper');

exports.getByClientId = async(req, res, next) => {
    try {
        var data = await repository.getByClientId(req.userId);
        res.status(200).send(data);
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
}

exports.post = async(req, res, next) => {
    try {
        const data = {
            number: req.body.number,
            client: req.userId
        }
        await repository.create(data);
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

exports.inactive = async(req, res, next) => {
    try {
        const data = {
            active : false
        }
        await repository.inactive(req.params.id, data);
        helperMessage.message(res, 200, 'Conta inativada com sucesso!');
    } catch (e) {
        helperMessage.message(res, 500, 'Falha ao processar sua requisição');
    }
};
