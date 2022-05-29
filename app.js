const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookie = require('cookie-parser');
const logger = require('morgan');
const methodOverride =  require('method-override');
const session = require('express-session');
const cors = require("cors");
const dotenv = require("dotenv")
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

dotenv.config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());
app.use(userLoggedMiddleware);
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(cors());


// ************ Route System require and use() ************

const mainRouter = require('./src/routes/mainRouter');
const usersRouter = require('./src/routes/usersRouter');
const productsRouter = require('./src/routes/productsRouter');
const productsApiRouter = require('./src/routes/api/productsApiRouter');
const usersApiRouter = require('./src/routes/api/usersApiRouter');
const seatsApiRouter = require('./src/routes/api/seatsApiRouter');
const checkOutRouter = require('./src/routes/checkOutRouter');

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/movies', productsRouter);
app.use('/api', productsApiRouter);
app.use('/api', usersApiRouter);
app.use('/api', seatsApiRouter);
app.use('/', checkOutRouter);

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
