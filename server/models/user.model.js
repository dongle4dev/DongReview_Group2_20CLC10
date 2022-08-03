const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const { conn } = require('../helpers/connectionMultiMongodb')

const User = new Schema({
    username: { 
        type: String,
        required: true, 
        unique: true, 
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});
// Mã hóa mật khẩu = Bcrypt
User.pre('save', async function(next) {
    try {
        // Băm mật khẩu với salt => Khó dò
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(this.password, salt)
        this.password = hashPassword
        next()
    } catch(err) {
        next(err)
    }
})

User.methods.isCheckPassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (err) {
        next(err)
    }
}


//Collection sẽ có tên là Films = tên model + 's'
module.exports = conn.model('User', User);