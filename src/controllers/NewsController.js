const News = require('../models/News')
const { multiMongooseToObject } = require('../util/mongoose')
const { mongooseToObject } = require('../util/mongoose')

class NewsController {

    index(req, res, next) {
        News.find({})
            .then(news => {
                res.render('news', {
                    news: multiMongooseToObject(news)
                });
            })
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

    post(req, res, next) {
        res.render('news/post');
    }

    store(req, res, next) {
        const news = new News(req.body);
        news.save()
            .then(() => res.redirect('/news'))
            .catch(error => {

            });

    }
}

//Tạo ra instance NewsController ra ngoài khi được gọi
module.exports = new NewsController();
