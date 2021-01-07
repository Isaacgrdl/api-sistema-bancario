'use strict';
const repository = require('../repositories/accountRepository');

exports.withdraw = async(res, id, balanceToBeWithdrawn) => {
    const account = await repository.getById(id);

    if (account.balance > balanceToBeWithdrawn) {
        const newBalance = (account.balance - balanceToBeWithdrawn);
        repository.updateBalance(id, newBalance);
        res.status(200).send({message: 'Saque efetivado'});
    } else {
        res.status(200).send({message: 'Saque não efetivado'});
    }
}

exports.deposit = async(res, id, balanceToBeDeposit) => {
    const account = await repository.getById(id);

    if (balanceToBeDeposit > 0) {
        const newBalance = (parseInt(account.balance) + parseInt(balanceToBeDeposit));
        repository.updateBalance(id, newBalance);
        res.status(200).send({message: 'Deposito efetivado'});
    } else {
        res.status(200).send({message: 'Deposito não efetivado'});
    }
}
