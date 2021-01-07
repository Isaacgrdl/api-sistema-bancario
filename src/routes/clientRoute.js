'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientController');

router.get('/', controller.get);
router.post('/withdraw', controller.withdraw);
router.post('/deposit', controller.deposit);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;