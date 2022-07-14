const Film = require('../models/Film')
const { multiMongooseToObject } = require('../../util/mongoose')

class SiteController {
    //[GET] /
    index(req, res, next) {
        Film.find({})
            .then(films => { 
                res.render('home', { 
                    films: multiMongooseToObject(films)
                })
            })
            .catch(next) //err => next(err)
        //res.render('home');
    }
}

//Tạo ra instance SiteController ra ngoài khi được gọi
module.exports = new SiteController();
