const express = require('express');
const router = express.Router();

const commentController = require('../controllers/review.controller')
const { signAccessToken, verifyAccessToken } = require('../helpers/jwtService')

//path /film/ đã được định nghĩa ở bên index.js nên ta chỉ cần '/'

router.post('/store', commentController.store)
router.get('/:id/updatecmt', commentController.updateComment)
router.get('/:id/updatelike', commentController.updatelike)
router.put('/:id', commentController.submit)
router.get('/:id/allcmt', commentController.showallcmt)
router.delete('/:id/delecmt', commentController.deleteCmt)

module.exports = router;
