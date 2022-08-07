const { verify } = require('crypto')
const express = require('express')
const router = express.Router()

const reviewController = require('../controllers/review.controller')
const { verifyAccessToken } = require('../helpers/jwtService')
//const reviewController = require('../controllers/review.controller');


router.post('/review/store', reviewController.store)
router.get('/review/:id/update', reviewController.updateReview)
router.get('/review/:id/updatelike', reviewController.updatelike)
router.get('/review/:id/showreview', reviewController.showallreview)
router.get('/review/:id/getreview', reviewController.show)
router.put('/review/:id', reviewController.submit)
router.delete('/review/:id', reviewController.deleteReview)

module.exports = router;
