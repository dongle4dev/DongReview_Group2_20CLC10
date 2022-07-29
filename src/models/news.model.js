const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)

const News = new Schema({
    filmID: { type: String, required: true},
    src: {type: String, default: ''},
    img: { type: String},
    title: { type: String, default: ''},
    slug: { type: String, slug: 'title', unique: true}, 
}, {
    timestamps: true,
});


//Collection sẽ có tên là Films = tên model + 's'
module.exports = mongoose.model('News', News);
