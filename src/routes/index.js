//Mục đích: Chuyển hết các dòng code về routes vào đây
const newsRouter = require('./news');
const siteRouter = require('./site');
const filmRouter = require('./films');
const meRouter = require('./me');
const userRouter = require('./users');
const authRouter = require('./auth');
const contactRouter = require('./contacts');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/films', filmRouter);
    app.use('/me', meRouter);
    app.use('/api/user', userRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/contact', contactRouter);
    app.use('/', siteRouter);
}

module.exports = route;
