const express = require('express');
const router = express.Router();

const newsController = require('../controllers/news.controller');

//path /news/ đã được định nghĩa ở bên index.js nên ta chỉ cần '/'

router.post('/store', newsController.store);
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
