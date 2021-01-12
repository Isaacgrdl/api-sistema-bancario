'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/accountController');
const authMiddleware = require('../middlewares/authMiddleware');
const permissionMiddleware = require('../middlewares/permissionMiddleware');

router.use(authMiddleware);
router.use(permissionMiddleware.permissionClient);

router.get('/', controller.getByClientId);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.put('/inactive/:id', controller.inactive);

module.exports = router;