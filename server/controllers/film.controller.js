const Film = require('../models/film.model')
const News = require('../models/news.model')
const { multiMongooseToObject, mongooseToObject } = require('../util/mongoose')

class FilmController {
    //[GET] /films/:id/update
    update(req, res, next) {
        Film.findById(req.params.id)
            .then(film => {
                res.render('films/update', {film: mongooseToObject(film)})
            })
            .catch(next)
    }

    //[PUT] /films/:id
    submit(req, res, next) {
        Film.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/films'))
            .catch(next)
    }

    //[GET] /films/:slug
    show(req, res, next) {
        Film.findOne({ slug: req.params.slug})
            .then(film => { res.json(film) })
            .catch(next)
    }

    //[POST] /film/store
    async store(req, res, next) {
        try {
            const film = new Film(req.body)

            const savedFilm = await film.save()
            return res.json({
                status: 'OK',
                elements: savedFilm
            })
        } catch(err) {
            next(err)
        }
    }
    //[GET] /film/found-films/:title
    async findFilmWithName(req, res, next) {
        try {
            const result = await Film.find({ title : new RegExp(req.params.title)}, 'title img slug').exec()

            return res.json(result)
        } catch(err) {
            next(err)
        }
    }
    //[DELETE] /film/:id
    async deleteFilm(req, res, next) {
        try {
            const deleted = await Film.deleteOne({_id: req.params.id});

            return res.json({status: "Ok"})
        } catch(e) {
            console.error(`[error] ${e}`);
            next(e)
        }
    }
}

//Tạo ra instance FilmController ra ngoài khi được gọi
module.exports = new FilmController();
