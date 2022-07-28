//Mục đích: Chuyển hết các dòng code về routes vào đây
const createError = require('http-errors')
const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const filmRouter = require('./film.route');
const meRouter = require('./me.route');
const userRouter = require('./user.route');
const authRouter = require('./auth.route');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/film', filmRouter);
    app.use('/me', meRouter);
    app.use('/user', userRouter);
    app.use('/auth', authRouter);
    app.use('/', siteRouter);

    app.use((req, res, next) => {
        next(createError.NotFound('This route does not exist.'))
    })
    app.use((err, req, res, next) => {
        res.json({ 
            status: err.status || 500,
            message: err.message
        })
    })
}

module.exports = route;
