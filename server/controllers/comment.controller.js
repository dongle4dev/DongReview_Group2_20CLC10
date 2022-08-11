const { mongooseToObject } = require('../util/mongoose')
const { multiMongooseToObject } = require('../util/mongoose')

const Comment = require('../models/comment.model')


class CommentController {
    async showallcmt(req, res, next) {
        try {
            let a = req.params.id
            let listofcmt = []
            const comments = await Comment.find()
            for (const item of comments) {
                let k = item
                let o = k.reviewID
                if (o == a) {
                    listofcmt.push(item)
                }
            }
            return res.json({
                listofcmt
            })
        } catch (err) {
            next(err)
        }
    }

    async store(req, res, next) {
        try {
            const comment = new Comment(req.body)
            const savecomment = await comment.save()
            return res.json({
                status: 'OK',
                elements: savecomment
            })
        }
        catch (err) {
            next(err)
        }
    }

    async updatercmt(req, res, next) {
        try {
            const comment = await Comment.findById(req.params.id)
            if (comment) {
                let t = new Comment();
                t = req.body;
                comment = t
                let updatecmt = null
                try {
                    updatecmt = await comment.save()
                }
                catch (err) {
                    next(err)
                }
                return res.statuc(200).json({
                    success: true,
                    message: "Update like success",
                    review: updatecmt
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
            const comment = await Comment.findById(req.params.id)
            if (comment) {
                comment.like = review.like + 1
                let updatecmt = null
                try {
                    updatecmt = await comment.save()
                }
                catch (err) {
                    next(err)
                }
                return res.statuc(200).json({
                    success: true,
                    message: "Update like success",
                    comment: updatecmt
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

    async deleteCmt(req, res, next) {
        try {
            const dele = await Comment.deleteOne({ _id: req.params.id })
            return res.json({ status: "dele finish" })
        } catch (err) {
            console.error(`[error] ${e}`)
            next(err)
        }
    }
}



module.exports = new CommentController();
