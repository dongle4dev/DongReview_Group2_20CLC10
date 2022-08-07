const express = require('express');
const router = express.Router();

const commentController = require('../controllers/review.controller');
const { signAccessToken, verifyAccessToken } = require('../helpers/jwtService')

//path /film/ đã được định nghĩa ở bên index.js nên ta chỉ cần '/'

router.post('/cmt/store', commentController.store)
router.get('/cmt/:id/update', commentController.updateComment)
router.get('/cmt/:id/updatelike', commentController.updatelike)
router.put('/cmt/:id', commentController.submit)
router.get('/cmt/:id/allcmt', commentController.showallcmt)
router.delete('/cmt/:id/delecmt', commentController.deleteCmt)

module.exports = router;
