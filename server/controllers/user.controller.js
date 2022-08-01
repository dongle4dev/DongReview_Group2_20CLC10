const createError = require('http-errors')
const User = require('../models/user.model')
const { userValidate } = require('../helpers/validation')
const { signAccessToken, verifyAccessToken, signRefreshToken } = require('../helpers/jwtService')

class UserController {
    //[POST] /user/register
    async register(req, res, next) {
        try {
            const {email, password} = req.body
            const {error} = userValidate(req.body)

            if (error) {
                throw createError(error.details[0].message)
            }

            const isExists = await User.findOne({ username: email })

            if (isExists) {
                throw createError.Conflict(`This email: ${email} already exists`)
            }

            const user = new User({ username: email, password})
            const savedUser = await user.save()
            
            return res.json({
                status: 'OK',
                elements: savedUser
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
    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const {error} = userValidate(req.body)
            if (error) {
                throw createError(error.details[0].message)
            }

            const user = await User.findOne({username: email})
            if (!user) {
                throw createError.NotFound('User is not found')
            }

            const isValid = await user.isCheckPassword(password)
            if (!isValid) {
                throw createError.Unauthorized()
            }
            const accessToken = await signAccessToken(user._id)
            // const refreshToken = await signRefreshToken(user._id)
            res.json({
                accessToken: accessToken
            })
        } catch(err) {
            next(err)
        }
    }
    //[POST] /user/logout
    logout(req, res, next) {
        res.send('Logout')
    }
    //[POST] /user/review
    review(req, res, next) {
        res.json({
            status: 'Ok'
        })
    }
    
}

//Tạo ra instance UserController ra ngoài khi được gọi
module.exports = new UserController();
