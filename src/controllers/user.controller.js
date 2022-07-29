const User = require('../models/user.model')
const createError = require('http-errors')

class UserController {
    //[POST] /user/register
    async register(req, res, next) {
        try {
            const {email, password} = req.body

            if (!email || !password) {
                throw createError.BadRequest()
            }

            const isExists = await User.findOne({ username: email })

            console.log(typeof isExists)

            if (isExists) {
                throw createError.Conflict(`This email: ${email} already exists`)
            }

            const isCreated = await User.create({ username: email, password})
            
            return res.json({
                status: 'OK',
                elements: isCreated
            })
        } catch(err) {
            next(err)
        }
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
