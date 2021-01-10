const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

router.post('/client', controller.authClient);
router.post('/employee', controller.authEmployee);

module.exports = router;