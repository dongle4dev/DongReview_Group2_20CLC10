const { verify } = require('crypto')
const express = require('express')
const router = express.Router()

const reportController = require('../controllers/report.controller')
const { signAccessToken, verifyAccessToken } = require('../helpers/jwtService')
//const reviewController = require('../controllers/review.controller');

router.post('/store', reportController.store)
router.delete('/:id', reportController.deleteReport)
router.get('/', reportController.show)
module.exports = router;
