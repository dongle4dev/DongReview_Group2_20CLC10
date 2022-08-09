const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)
const { conn } = require('../helpers/connectionMultiMongodb')

const Report = new Schema({
    reviewID : {
        type: Schema.Types.ObjectId,
        ref: 'Review',
        require: true,
    },
    content: {type: String, default: ''},
    slug: { type: String, slug: 'title', unique: true}, 
}, {
    timestamps: true,
})

module.exports = conn.model('Report', Report)
