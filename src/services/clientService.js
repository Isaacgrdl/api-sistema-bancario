'use strict';
const repository = require('../repositories/accountRepository');
const helperMessage = require('../helpers/messageHelper');

exports.withdraw = async(res, id, balanceToBeWithdrawn) => {
    const account = await repository.getById(id);

    if (account.balance > balanceToBeWithdrawn) {
        const newBalance = (account.balance - balanceToBeWithdrawn);
        repository.updateBalance(id, newBalance);
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
        helperMessage.message(res, 200, 'Saque efetivado');
    } else {
        helperMessage.message(res, 500, 'Falha ao processar a requisição');
    }
}
