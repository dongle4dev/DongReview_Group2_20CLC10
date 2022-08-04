const { multiMongooseToObject } = require('../util/mongoose')
const { mongooseToObject } = require('../util/mongoose')

const Review = require('../models/review.model')


class ReviewController {
    index(req, res, next) {
        Review.find({})
            .then(reviews=> 
                    res.json(reviews))
        
            .catch(next)
    }
    //[GET] /news/:slug
    show(req, res, next) {
        Review.findOne({slug: req.params.slug}) 
            .then(review => {
                res.render('review/show', {
                    review:  mongooseToObject(review)
                });
            })
            .catch(next);
    }

    async store(req, res, next)
    {
        try{
            const review = new Review(req.body)
            const savereview = await review.save()
            return res.json({
                status: 'OK',
                elements: savereview
            })

        }
        catch(err){
            next(err)
        }
    }
}

module.exports = new ReviewController();
