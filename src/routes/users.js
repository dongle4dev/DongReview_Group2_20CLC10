const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

// @route     POST api/users/signup
// @desc      Regiter a user
// @access    Public
router.get('/signup', userController.signup);

module.exports = router;
