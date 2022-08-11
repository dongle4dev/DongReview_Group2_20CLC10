const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)
const { conn } = require('../helpers/connectionMultiMongodb')

const Report = new Schema({
    reviewID : {
        type: String,
        require: true,
        unique: false,
    },
    content: {type: String, default: ''}, 
}, {
    timestamps: true,
})


module.exports = conn.model('Report', Report)
