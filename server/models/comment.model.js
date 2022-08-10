const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema
mongoose.plugin(slug)
const { conn } = require('../helpers/connectionMultiMongodb')

const Comment = new Schema({
  filmID: {
    type: Schema.Types.ObjectId,
    ref: 'Film',
    require: true,
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  reviewID: {
    type: Schema.Types.ObjectId,
    ref: 'Review',
    require: true,
  },
  like: { type: Number },
  content: { type: String, default: '' }
}, {
  timestamps: true,
});

module.exports = conn.model('Comment', Comment);
