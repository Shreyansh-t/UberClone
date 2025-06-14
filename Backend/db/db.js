const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT).then(e => {console.log("MONGODB connected")}).catch(err => console.log(err));
}

module.exports = connectToDb;