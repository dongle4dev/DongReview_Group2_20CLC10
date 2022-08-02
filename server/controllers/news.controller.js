const News = require('../models/news.model')
const { multiMongooseToObject } = require('../util/mongoose')
const { mongooseToObject } = require('../util/mongoose')

class NewsController {
    index(req, res, next) {
        News.find({})
            .then(news => res.json(news))
            .catch(next);
    }

    //[GET] /news/:slug
    show(req, res, next) {
        News.findOne({slug: req.params.slug}) 
            .then(news => {
                res.render('news/show', {
                    news:  mongooseToObject(news)
                });
            })
            .catch(next);
    }

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
}

//Tạo ra instance NewsController ra ngoài khi được gọi
module.exports = new NewsController();
