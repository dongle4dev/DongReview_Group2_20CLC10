const { multiMongooseToObject } = require('../util/mongoose')
const { mongooseToObject } = require('../util/mongoose')

const Review = require('../models/review.model')
const Comment = require('../models/comment.model')



class ReviewController {
    //
    async showallreview(req, res, next)
    {
        try{
            let a = req.params.id
            let listofreview =[]
            const reviews = await Review.find()
            for (const item of reviews)
            {
                k = item
                let o = k.filmID
                if(o.equals(a))
                {
                    listofreview.push(item)
                }
            }
            return res.json({
                listofreview
            })
        } catch(err)
        {
            next(err)
        }
    }
    
    //[GET] /review/:id
    async show(req, res, next){
        try{
            const review = await Review.findById(req.params.id)
            if(review){

                let a = review._id
                let socmt = 0
                let k = new Comment
                let comments = await Comment.find()
                for( const item of comments)
                {
                    k = item
                    let o = k.reviewID
                    if( o.equals(a))
                    {
                        socmt++
                    }
                }
                return res.json({
                    review: review,
                    socmt
                })
            }
            return res.status(404).json({success: false, message: "Wrong id"})

        }catch(err)
        {
            next(err)
        }
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
    
    updateReview(req, res, next)
    {
        Review.findById(req.params.id)
            .then(review =>
                res.render('reviews/update', {review: mongooseToObject(review)})
                )
            .catch(next)
    }

    submit(req, res, next)
    {
        Review.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/reviews'))
            .catch(next)
    }

    async updatelike(req, res, next)
    {
        try{
            const review = await Review.findById(req.params.id)
            if(review){
                review.like = review.like + 1
                let updatereview = null
                try{
                    updatereview = await review.save()
                }
                catch(err)
                {
                    next(err)
                }
                return res.statuc(200).json({
                    success: true,
                    message: "Update like success",
                    review: updatereview
                })
            }
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Wrong id",
                })

        }catch(err)
        {
            next(err)
        }
    }

    async deleteReview(req, res, next){
        try{
            const dele = await Review.deleteOne({_id: req.params.id})
            return res.json({status: "dele finish"})
        } catch(err)
        {
            console.error(`[error] ${e}`)
            next(err)
        }
    }
}



module.exports = new ReviewController();
