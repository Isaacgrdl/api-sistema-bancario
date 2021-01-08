'use strict';
const repository = require('../repositories/accountRepository');
const serviceExtract = require('../services/extractService');
const helperMessage = require('../helpers/messageHelper');

exports.withdraw = async(res, id, balanceToBeWithdrawn) => {
    const account = await repository.getById(id);

    if (account.balance > balanceToBeWithdrawn) {
        const newBalance = (account.balance - balanceToBeWithdrawn);
        repository.updateBalance(id, newBalance);
        const data = {
            type: 'Saque',
            value: balanceToBeWithdrawn,
            client: account.client
        }
        serviceExtract.extractSave(data);
        helperMessage.message(res, 200, 'Saque efetivado');
    } else {
        helperMessage.message(res, 500, 'Falha ao processar a requisição');
    }
}

exports.deposit = async(res, id, balanceToBeDeposit) => {
    const account = await repository.getById(id);

    if (balanceToBeDeposit > 0) {
        const newBalance = (parseInt(account.balance) + parseInt(balanceToBeDeposit));
        repository.updateBalance(id, newBalance);
        const data = {
            type: 'Deposito',
            value: balanceToBeDeposit,
            client: account.client
        }
        serviceExtract.extractSave(data);
        helperMessage.message(res, 200, 'Deposito efetivado');
    } else {
        helperMessage.message(res, 500, 'Falha ao processar a requisição');
    }
}
