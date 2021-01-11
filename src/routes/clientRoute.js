'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', controller.post);
router.use(authMiddleware);

//CRUD
router.get('/', controller.get);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

//Services
router.post('/withdraw', controller.withdraw);
router.post('/deposit', controller.deposit);

//Extracts
router.get('/extract/:id', controller.getExtractById);
router.get('/extract/today/:id', controller.getExtractToday);
router.get('/extract/custom/:id', controller.getExtractCustomDate);
router.get('/extract/lastweek/:id', controller.getExtractLastWeek);
router.get('/extract/lastMonth/:id', controller.getExtractLastMonth);

module.exports = router;