const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)

const News = new Schema({
    title: { type: String, required: true},
    author: {type: String, default: ''},
    content: { type: String, default: ''},
    image: { type: String},
    slug: { type: String, slug: 'title', unique: true}, 
}, {
    timestamps: true,
});


//Collection sẽ có tên là Films = tên model + 's'
module.exports = mongoose.model('News', News);
