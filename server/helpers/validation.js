const Joi = require('joi');

const userValidate = data => {
    const user = Joi.object({
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(4).max(32).required()
    })

    return user.validate(data)
}

module.exports = { userValidate }