const { number } = require("joi");
const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const { conn } = require("../helpers/connectionMultiMongodb");
const News = require("./news.model");

const MainCharacter = new Schema({
  name: { type: String },
  img: { type: String },
});

const Film = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    trailer: { type: String },
    img: { type: String },
    year: { type: Number },
    nation: { type: String },
    rate: { type: Number, default: 0},
    main: [MainCharacter],
    slug: { type: String, slug: "title", unique: true },
    type: { type: String },
  },
  {
    timestamps: true,
  }
);

Film.pre("deleteOne", function (next) {
  const filmID = this.getQuery()["_id"];
  News.deleteMany({ filmID: filmID }, function (err, result) {
    if (err) {
      next(err);
    }
    next();
  });
});

//Collection sẽ có tên là Films = tên model + 's'
module.exports = conn.model("Film", Film);
