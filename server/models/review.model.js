const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)
const { conn } = require('../helpers/connectionMultiMongodb')

const Review = new Schema({
    filmID : {
        type: Schema.Types.ObjectId,
        ref: 'Film',
        require: true,
    },
    userID: {type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    content: {type: String, default: ''},
    like: { type: Number},
    slug: { type: String, slug: 'title', unique: true}, 
}, {
    timestamps: true,
})




module.exports = conn.model('Review', Review)
