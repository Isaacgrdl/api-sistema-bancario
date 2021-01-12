'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientController');
const authMiddleware = require('../middlewares/authMiddleware');
const permissionMiddleware = require('../middlewares/permissionMiddleware');

router.post('/', controller.post);
router.use(authMiddleware);
router.use(permissionMiddleware.permissionClient);

//CRUD
router.get('/', controller.get);
router.put('/', controller.put);
router.put('/inactive', controller.inactive);

//Services
router.post('/withdraw', controller.withdraw);
router.post('/deposit', controller.deposit);

module.exports = router;