const express = require('express');
const router = express.Router();

const filmController = require('../app/controllers/FilmController');

//path /films/ đã được định nghĩa ở bên index.js nên ta chỉ cần '/'

router.get('/create', filmController.create);
router.get('/:id/update', filmController.update);
router.put('/:id', filmController.submit);
router.post('/store', filmController.store);
router.get('/:slug', filmController.show);

module.exports = router;
