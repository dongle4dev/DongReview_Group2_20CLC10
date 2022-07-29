const Film = require('../models/Film')
const { multiMongooseToObject, mongooseToObject } = require('../util/mongoose')

class MeController {
    //[GET] /me/stored/films
    storedFilms(req, res, next) {
        Film.find({})
            .then(films => res.render('me/stored-films', {films: multiMongooseToObject(films)}))
            .catch(next)
    }
}

//Tạo ra instance MeController ra ngoài khi được gọi
module.exports = new MeController();
