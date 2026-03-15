const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login/admin', authController.loginAdmin);
router.post('/login/agent', authController.loginAgent);

module.exports = router;
