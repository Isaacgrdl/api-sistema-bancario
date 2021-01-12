'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/extractController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/:id', controller.getExtractById);
router.get('/today/:id', controller.getExtractToday);
router.get('/custom/:id', controller.getExtractCustomDate);
router.get('/lastweek/:id', controller.getExtractLastWeek);
router.get('/lastMonth/:id', controller.getExtractLastMonth);

module.exports = router;