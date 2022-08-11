const { verify } = require('crypto')
const express = require('express')
const router = express.Router()

const reviewController = require('../controllers/review.controller')
const { verifyAccessToken } = require('../helpers/jwtService')
//const reviewController = require('../controllers/review.controller');


router.post('/store', reviewController.store)
router.put('/:id/update', reviewController.updatereview)
router.get('/:id/updatelike', reviewController.updatelike)
router.get('/:id/showreview', reviewController.showallreview)
router.get('/:id/getreview', reviewController.show)
router.get('/:id/topreview', reviewController.findTopreview)
router.delete('/:id', reviewController.deleteReview)

module.exports = router;
