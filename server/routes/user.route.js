const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { signAccessToken, verifyAccessToken } = require('../helpers/jwtService')

router.post('/register', userController.register);
router.get('/all', userController.all);
router.post('/refreshToken', userController.refreshToken);
router.post('/login', userController.login);
router.delete('/logout', userController.logout);
router.post('/review', verifyAccessToken, userController.review);


module.exports = router;
