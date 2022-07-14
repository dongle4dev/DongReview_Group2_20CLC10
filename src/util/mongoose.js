module.exports = {
    mongooseToObject: function (mongoose) {
        return mongoose.toObject()
    },
    multiMongooseToObject: function (mongooses) {
        return mongooses = mongooses.map(mongoose => mongoose.toObject())
    }
}
