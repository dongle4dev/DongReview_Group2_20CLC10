const express = require('express');
const router = express.Router();

const meController = require('../controllers/me.controller');

//path /mes/ đã được định nghĩa ở bên index.js nên ta chỉ cần '/'

router.get('/stored/films', meController.storedFilms);

module.exports = router;
