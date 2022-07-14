//Để xử lí các page có path không có chi tiết, chia ra nhiều page nhỏ

const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteController');

//path /news/ đã được định nghĩa ở bên index.js nên ta chỉ cần '/'

// router.use('/:slug', newsController.show)

router.get('/', siteController.index);

module.exports = router;
