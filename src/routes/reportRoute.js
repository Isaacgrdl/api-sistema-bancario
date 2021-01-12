'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/reportController');
const authMiddleware = require('../middlewares/authMiddleware');
const permissionMiddleware = require('../middlewares/permissionMiddleware');

router.use(authMiddleware);
router.use(permissionMiddleware.permissionEmployee);

//REPORTS
router.get('/accountsRegistered', controller.reportAccountsRegistered);
router.get('/openAccount', controller.reportActiveAccounts);
router.get('/closedAccount', controller.reportClosedAccounts);
router.get('/deposit', controller.reportTotalDeposit);
router.get('/withdraw', controller.reportTotalWithdraw);

module.exports = router;