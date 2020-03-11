var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var url = 'mongodb+srv://Xons001:1234@loginheroku-yo2kj.mongodb.net/test?retryWrites=true&w=majority';

mongoose
    .connect(url,{useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log("connected to database!"))
    .catch((err) => {
        throw err;
    });

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/login', function(req, res) {
  res.render('index');
});

app.get('/home', function(req, res) {
  res.render('home');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});