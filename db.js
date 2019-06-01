const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jesrFive', { useNewUrlParser: true })//数据库名：jse\\esrFive

const articleSchema = new mongoose.Schema({
    title : String,
    author : String,
    connect : String
})

module.exports = mongoose.model('article', articleSchema); //表名： atricle
