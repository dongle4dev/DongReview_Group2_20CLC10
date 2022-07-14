class NewsController {
    //Index: lấy ra trang chính của news
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAILS!!!');
    }
}

//Tạo ra instance NewsController ra ngoài khi được gọi
module.exports = new NewsController();
