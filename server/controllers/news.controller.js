const News = require('../models/news.model')
const { multiMongooseToObject } = require('../util/mongoose')
const { mongooseToObject } = require('../util/mongoose')

class NewsController {
    //[GET] /news/:filmID
    show(req, res, next) {
        News.find({filmID: req.params.filmID}) 
            .then(news => res.json({status: 'Ok', elements: news}))
            .catch(next);
    }
    //[POST] /news/store
    async store(req, res, next) {
        try {
            const news = new News(req.body)

            const savedNews = await news.save()
            return res.json({
                status: 'OK',
                elements: savedNews
            })
        } catch(err) {
            next(err)
        }

    }
    //[PUT] /news/:id
    update(req, res, next) {
        Film.updateOne({_id: req.params.id}, req.body)
            .then((news) => res.json({status: 'Ok', elements: news}))
            .catch(next)
    }
}

//Tạo ra instance NewsController ra ngoài khi được gọi
module.exports = new NewsController();
