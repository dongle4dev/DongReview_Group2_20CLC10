const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

// @route     POST api/users
// @desc      Regiter a user
// @access    Public
router.get('/', userController.show);

module.exports = router;
