const express = require('express')
const router = express.Router()

const reviewController = require('../controllers/review.controller')
//const reviewController = require('../controllers/review.controller');


router.post('/store', reviewController.store)
router.get('/:slug', reviewController.show)
router.get('/', reviewController.index)

module.exports = router;
