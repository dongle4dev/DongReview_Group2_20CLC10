const createError = require('http-errors')
const User = require('../models/user.model')
const { userValidate, loginValidate } = require('../helpers/validation')
const { signAccessToken, verifyAccessToken } = require('../helpers/jwtService')

class UserController {
    //[POST] /user/register
    async register(req, res, next) {
        try {
            const {username, password} = req.body
            const {error} = userValidate(req.body)

            if (error) {
                throw createError(error.details[0].message)
            }

            const isExists = await User.findOne({ username: username })

            if (isExists) {
                throw createError.Conflict(`This username: ${username} already exists`)
            }

            const user = new User(req.body)
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
            const {username, password} = req.body
            const {error} = loginValidate(req.body)
            if (error) {
                throw createError(error.details[0].message)
            }

            const user = await User.findOne({username: username})
            if (!user) {
                //throw createError.NotFound('User is not found')
                return res.json({
                    status: 'Can not find user',

                })
            }

            const isValid = await user.isCheckPassword(password)
            if (!isValid) {
                throw createError.Unauthorized()
            }
            const accessToken = await signAccessToken(user._id)
            // const refreshToken = await signRefreshToken(user._id)
            res.json({
                accessToken: accessToken,
                elements: { 
                    fullName: user.fullName,
                    dob: user.dob,
                    avt: user.avt,
                    id: user._id,
                }
            })
        } catch(err) {
            next(err)
        }
    }
    all(req, res, next) {
        try {
            User.find({})
                .then((users) => res.json(users))
                .catch(next);
        } catch (error) {
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
