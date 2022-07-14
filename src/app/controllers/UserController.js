const Film = require('../models/Film')
const { multiMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class UserController {
    //[GET]
    show(req, res, next) {
        
    }
    
    
}

//Tạo ra instance UserController ra ngoài khi được gọi
module.exports = new UserController();
