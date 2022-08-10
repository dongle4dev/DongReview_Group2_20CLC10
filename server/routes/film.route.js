const express = require('express');
const router = express.Router();

const filmController = require('../controllers/film.controller');
const { signAccessToken, verifyAccessToken } = require('../helpers/jwtService')

//path /film/ đã được định nghĩa ở bên index.js nên ta chỉ cần '/'

router.post('/store', filmController.store);
router.get('/found-films/:title', filmController.findFilmWithName)
router.get('/top-films', filmController.findTopFilms)
router.get('/all', filmController.all)
router.put('/:id/updatescore', filmController.updatescore)
router.get('/:id', filmController.show);
router.put('/:id', filmController.update);
router.get('/:id/update', verifyAccessToken, filmController.update);
router.get('/:id/updatescore', filmController.updatescore)
router.put('/:id', verifyAccessToken, filmController.submit)
router.get('/:slug', filmController.show);
router.delete('/:id', filmController.deleteFilm)


module.exports = router;
