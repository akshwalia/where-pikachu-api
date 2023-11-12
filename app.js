var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

var indexRouter = require('./routes/index');
var pokemonRouter = require('./routes/pokemon');
const { log } = require('console');

var app = express(); 

async function connect() {
  await mongoose.connect(process.env.MONGODB_URI, {strictQuery: true});
  console.log('Connected to database!');
}
connect();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/pokemon', pokemonRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.status(res.status || 500).json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
