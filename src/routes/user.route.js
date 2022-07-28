const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

// @route     POST api/users/signup
// @desc      Regiter a user
// @access    Public
router.post('/register', userController.register);
router.post('/refreshToken', userController.refreshToken);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;
