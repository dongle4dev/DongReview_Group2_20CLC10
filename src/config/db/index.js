const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/dong_review');
        console.log('Connect successfully!')
    }
    catch (err) {
        console.error(err);
    }

}

module.exports = { connect }
