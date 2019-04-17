var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var calRouter = require('./routes/cal');
var audioRouter = require('./routes/audio');
var videoRouter = require('./routes/video');
var timeLineRouter = require('./routes/timeline');

var app = express();

app.set('view engine', 'pug')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cal', calRouter);
app.use('/audio', audioRouter);
app.use('/video', videoRouter);
app.use('/timeline', timeLineRouter);

module.exports = app;
