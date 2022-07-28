const User = require('../models/user.model')
// const { multiMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class UserController {
    //[POST] /user/register
    register(req, res, next) {
        res.send('User register')
    }
    //[POST] /user/refreshToken
    refreshToken(req, res, next) {
        res.send('Refresh token')
    }
    //[POST] /user/login
    login(req, res, next) {
        res.send('Login')
    }
    //[POST] /user/logout
    logout(req, res, next) {
        res.send('Logout')
    }
    
}

//Tạo ra instance UserController ra ngoài khi được gọi
module.exports = new UserController();
