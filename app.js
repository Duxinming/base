const express = require('express');
const bodyParser = require('body-parser');
const jesrFive = require('./db');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/abc', function (req, res) {
    res.end('Hello jesr!')
})

app.post('/article', function (req, res) {

    console.log(req.body);

    let blog = req.body;

    jesrFive.create(blog, function (err, docs) {

        console.log(docs);

    })



    res.end('我收到了');
})

app.get('/getArticle', function (req, res) {
    jesrFive.find(function (err, doc) {
        console.log(doc);
        res.json(doc);
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})