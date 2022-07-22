const Film = require('../models/Film')
// const { multiMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class FilmController {
    //[GET] /films/:slug
    show(req, res, next) {
        Film.findOne({ slug: req.params.slug})
            .then(film => {
                res.render('films/show', {film: mongooseToObject(film)})
            })
            .catch(next)
    }
    
    //[GET] /films/create
    create(req, res, next) {
        res.render('films/create')
    }

    //[POST] /films/store
    store(req, res, next) {
        const film = new Film(req.body)
        film.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }
}

//Tạo ra instance FilmController ra ngoài khi được gọi
module.exports = new FilmController();
