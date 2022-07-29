const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { conn } = require('../config/connectionMultiMongodb')

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


//Collection sẽ có tên là Films = tên model + 's'
module.exports = conn.model('User', User);