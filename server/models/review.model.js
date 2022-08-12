const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)
const { conn } = require('../helpers/connectionMultiMongodb')

const Review = new Schema({
    filmID: {
        type: String,
        require: true,
        unique: false,
    },
    userID: {
        type: String,
        require: true,
        unique: false,
    },
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    like: { type: Number },
    ngaydang:{type: String},
    // //slug: { type: String, slug: id, require: true}, 
}, {
    timestamps: true,
})




module.exports = conn.model('Review', Review)
