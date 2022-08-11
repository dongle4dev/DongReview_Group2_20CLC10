const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comment.controller');
const { signAccessToken, verifyAccessToken } = require('../helpers/jwtService')

router.post('/store', commentController.store)
router.put('/:id/updatecmt', commentController.updatercmt)
router.get('/:id/updatelike', commentController.updatelike)
router.get('/:id/allcmt', commentController.showallcmt)
router.delete('/:id/delecmt', commentController.deleteCmt)


module.exports = router;
