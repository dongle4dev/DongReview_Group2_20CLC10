const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/register', userController.register);
router.post('/refreshToken', userController.refreshToken);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;
