'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/accountController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

//CRUD
router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

//REPORTS
router.get('/report', controller.reportAccountsRegistered);
router.get('/reportOpenAccount', controller.reportActiveAccounts);
router.get('/reportClosedAccount', controller.reportClosedAccounts);
router.get('/reportDeposit', controller.reportTotalDeposit);
router.get('/reportWithdraw', controller.reportTotalWithdraw);

module.exports = router;