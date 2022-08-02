const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)
const { conn } = require('../helpers/connectionMultiMongodb')

const News = new Schema({
    filmID : { type: Schema.Types.ObjectId, ref: 'Film' },
    src: {type: String, default: ''},
    img: { type: String},
    title: { type: String, default: ''},
    slug: { type: String, slug: 'title', unique: true}, 
}, {
    timestamps: true,
});


//Collection sẽ có tên là Films = tên model + 's'
module.exports = conn.model('News', News);
