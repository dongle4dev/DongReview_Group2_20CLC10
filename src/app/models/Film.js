const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)

const Film = new Schema({
    title: { type: String, required: true},
    description: { type: String, default: ''},
    trailer: { type: String},
    img: { type: String},
    slug: { type: String, slug: 'title', unique: true},
}, {
    timestamps: true,
});


//Collection sẽ có tên là Films = tên model + 's'
module.exports = mongoose.model('Film', Film);
