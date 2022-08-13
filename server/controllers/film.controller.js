const Film = require("../models/film.model");

class FilmController {
  //[GET] /film/:id
  show(req, res, next) {
    Film.findById(req.params.id)
      .then((film) => res.json(film))
      .catch(next);
  }

  //[PUT] /film/:id
  update(req, res, next) {
    Film.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.json({ status: "Ok" }))
      .catch(next);
  }

  //[GET] /all
  all(req, res, next) {
    Film.find({})
      .then((films) => res.json(films))
      .catch(next);
  }

  //[POST] /film/store
  async store(req, res, next) {
    try {
      const film = new Film(req.body);

      const savedFilm = await film.save();
      return res.json({
        status: "OK",
        elements: savedFilm,
      });
    } catch (err) {
      next(err);
    }
  }
  //[GET] /film/found-films/:title
  async findFilmWithName(req, res, next) {
    try {
      const result = await Film.find(
        { title: new RegExp(req.params.title) },
        "title img slug"
      ).exec();
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }

  //[DELETE] /film/:id
  async deleteFilm(req, res, next) {
    try {
      const deleted = await Film.deleteOne({ _id: req.params.id });

      return res.json({ status: "Ok" });
    } catch (e) {
      console.error(`[error] ${e}`);
      next(e);
    }
  }

  //[GET] /film/top-films
  async findTopFilms(req, res, next) {
    try {
      const result = await Film.find().sort({ rate: 1 }).limit(12);

      return res.json({
        status: "Ok",
        elements: result,
      });
    } catch (err) {
      next(err);
    }
  }
  async updatescore(req, res, next) {
    try {
      const film = await Film.findById(req.params.id);

                film.rate = (t.rate + film.rate*50)/51
                let updatefilm = null
                try {
                    updatefilm = await film.save()
                }
                catch (err) {
                    next(err)
                }
                return res.status(200).json({
                    success: true,
                    message: "Update score success",
                    film: updatefilm,
                })
            }

      if (film) {
        let t = new Film();
        t = req.body;


        film.rate = (t.rate + film.rate * 50) / 51;
        let updatefilm = null;
        try {
          updatefilm = await film.save();
        } catch (err) {
          next(err);
        }
        return res.status(200).json({
          success: true,
          message: "Update score success",
          film: updatefilm,
        });
      }
    } catch (err) {
      next(err);
    }
  }
}

//Tạo ra instance FilmController ra ngoài khi được gọi
module.exports = new FilmController();
