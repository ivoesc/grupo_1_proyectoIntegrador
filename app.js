const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride =  require('method-override');
const session = require('express-session');
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

const app = express();

app.listen (process.env.PORT || 3000, function () {
  console.log ("Servidor corriendo en el puerto 3000");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'secreto',
  resave: false,
  saveUninitialized: false,
}));
app.use(userLoggedMiddleware);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// ************ Route System require and use() ************

const mainRouter = require('./src/routes/mainRouter');
const usersRouter = require('./src/routes/usersRouter');
const productsRouter = require('./src/routes/productsRouter');

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/movies', productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
