const Film = require('../models/Film')

class SiteController {
    //[GET] /
    index(req, res, next) {
        Film.find({})
            .then(films => { 
                res.json(films)
            })
            .catch(next) //err => next(err)
    }
}

//Tạo ra instance SiteController ra ngoài khi được gọi
module.exports = new SiteController();
