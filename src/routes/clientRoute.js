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

module.exports = router;