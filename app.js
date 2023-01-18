let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '.')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res) {
  res.status(404).send("404");
});

module.exports = app;
