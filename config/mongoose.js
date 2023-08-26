const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://neha9nanda:75Hz8zt7pu692fEz@cluster0.wwcq5nj.mongodb.net/');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
