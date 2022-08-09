const Joi = require('joi');

const userValidate = data => {
    const user = Joi.object({
        username: Joi.string().lowercase().required(),
        password: Joi.string().min(4).max(32).required(),
        fullName: Joi.string().required(),
        dob: Joi.date().required(),
        avt: Joi.string().required()
    })

    return user.validate(data)
}

module.exports = { userValidate }