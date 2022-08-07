const Film = require('../models/film.model')
//const Review = require("../models/Review")
const News = require('../models/news.model')
const { multiMongooseToObject, mongooseToObject } = require('../util/mongoose')

class FilmController {
    //[GET] /films/:id/update
    update(req, res, next) {
        Film.findById(req.params.id)
            .then(film => {
                res.render('films/update', { film: mongooseToObject(film) })
            })
            .catch(next)
    }


    //[PUT] /films/:id
    submit(req, res, next) {
        Film.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/films'))
            .catch(next)
    }
    //[GET] /films/:slug
    //then show all phim review
    show(req, res, next) {
        Film.findOne({ slug: req.params.slug })
            .then(film => { res.json(film) })
            .catch(next)
    }

    async updatescore(req, res, next) {
        try {
            const film = await Film.findById(req.params.id)
            if (film) {
                const {
                    title1,
                    description1,
                    trailer1,
                    img1,
                    year1,
                    nation1,
                    rate1,
                    main1,
                    slug1,
                    type1
                } = req.body
                film.title = title1 || film.title
                film.description = description1 || film.description
                film.trailer = trailer1 || film.trailer
                film.img = img1 || film.img
                film.year1 = year1 || film.year1
                film.nation = nation1 || film.nation
                film.rate = (rate1 + film.rate * 20) / 21
                film.main = main1 || film.main
                film.slug = slug1 || film.slug
                film.type = type1 || film.type
                let updatefilm = null
                try {
                    updatefilm = await film.save()
                }
                catch (err) {
                    next(err)
                }
                return res.status(200).json({
                    success: true,
                    message: "Update score success",
                    film: updatefilm
                })
            }
            return res.status(404).json({ success: false, message: "Film is not fount" })
        } catch (err) {
            next(err)
        }
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
        } catch (err) {
            next(err)
        }
    }
    //[GET] /film/found-films/:title
    async findFilmWithName(req, res, next) {
        try {
            const result = await Film.find({ title: new RegExp(req.params.title) }, 'title img slug').exec()

            return res.json(result)
        } catch (err) {
            next(err)
        }
    }
    //[DELETE] /film/:id
    async deleteFilm(req, res, next) {
        try {
            const deleted = await Film.deleteOne({ _id: req.params.id });

            return res.json({ status: "Ok" })
        } catch (e) {
            console.error(`[error] ${e}`);
            next(e)
        }
    }
}

//Tạo ra instance FilmController ra ngoài khi được gọi
module.exports = new FilmController();
