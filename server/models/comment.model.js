const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)
const { conn } = require('../helpers/connectionMultiMongodb')

const Comment = new Schema({
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
  reviewID: {
    type: String,
    require: true,
    unique: false,
  },
  like: { type: Number },
  content: { type: String, default: '' }
},{
  timestamps: true,
});

module.exports = conn.model('Comment', Comment);
