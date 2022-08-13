const { multiMongooseToObject } = require('../util/mongoose')
const { mongooseToObject } = require('../util/mongoose')

const Review = require('../models/review.model')
const Comment = require('../models/comment.model')



class ReviewController {
    //
    async showallreview(req, res, next) {
        try {
            let a = req.params.id
            let listofreview = []
            const reviews = await Review.find().sort({"like": -1})
            for (const item of reviews) {
                let k = item
                let o = k.filmID
                if (o == a) {
                    listofreview.push(item)
                }
            }
            return res.json({
                listofreview
            })
        } catch (err) {
            next(err)
        }
    }

    //[GET] /review/:id
    async show(req, res, next) {
        try {
            const review = await Review.findById(req.params.id)
            if (review) {

                let a = review._id
                let socmt = 0
                let k = new Comment
                let comments = await Comment.find()
                for (const item of comments) {
                    k = item
                    let o = k.reviewID
                    if (o == a) {
                        socmt++
                    }
                }
                return res.json({
                    review: review,
                    socmt
                })
            }
            return res.status(404).json({ success: false, message: "Wrong id" })

        } catch (err) {
            next(err)
        }
    }

    async store(req, res, next) {
        try {
            const review = new Review(req.body)
            const savereview = await review.save()
            return res.json({
                status: 'OK',
                elements: savereview
            })

        }
        catch (err) {
            next(err)
        }
    }

    async updatereview(req, res, next) {
        try {
            const review = await Review.findById(req.params.id)
            if (review) {
                let t = new Review();
                t = req.body;
                review = t
                let updatereview = null
                try {
                    updatereview = await review.save()
                }
                catch (err) {
                    next(err)
                }
                return res.status(200).json({
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

        } catch (err) {
            next(err)
        }
    }


    async updatelike(req, res, next) {
        try {
            const review = await Review.findById(req.params.id)
            if (review) {
                review.like = review.like + 1
                let updatereview = null
                try {
                    updatereview = await review.save()
                }
                catch (err) {
                    next(err)
                }
                return res.status(200).json({
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

        } catch (err) {
            next(err)
        }
    }

    async dislike(req, res, next) {
        try {
            const review = await Review.findById(req.params.id)
            if (review) {
                review.like = review.like - 1
                let updatereview = null
                try {
                    updatereview = await review.save()
                }
                catch (err) {
                    next(err)
                }
                return res.status(200).json({
                    success: true,
                    message: " Dislike success",
                    review: updatereview
                })
            }
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Wrong id",
                })

        } catch (err) {
            next(err)
        }
    }

    async deleteReview(req, res, next) {
        try {
            const dele = await Review.deleteOne({ _id: req.params.id })
            return res.json({ status: "dele finish" })
        } catch (err) {
            console.error(`[error] ${e}`)
            next(err)
        }
    }
}

module.exports = new ReviewController();
