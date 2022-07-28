const path = require('path');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config()
require('./config/db/connectionMongodb')

//Tự động nạp file index.js
const route = require('./routes');
const dp = require('./config/db/connectionMongodb')
const methodOverride = require('method-override')

const app = express();
const port = process.env.PORT || 5000;

//use static file
app.use(express.static(path.join(__dirname, 'public')));
//node-sass chuyển đổi scss sang css, debug

app.use(
    express.urlencoded({
        extended: true, //chọn qs library để parsing url và encoding data
    }),
);
app.use(express.json()); //parsing json

app.use(methodOverride('_method'))

// HTTP Logger => Dễ dàng debug, biết đường dẫn,...
app.use(morgan('combined'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`); //http://localhost:3000/
});
