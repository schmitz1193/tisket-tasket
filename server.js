'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
//slash as the end indicated you look in index first
const routes = require('./routes/');

//set up environment port if none given default to 3000
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET || 'secret';

//set up mongodb URL

const MONGODB_HOST = process.env.MONGODB_HOST || `localhost`;
const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || `tasketbasket`;

// const MONGODB_AUTH = MONGODB_USER
//   ? `${MONGODB_USER}:${MONGODB_PASS}@`
//   : '';
// const MONGODB_URL = `mongodb://${MONGODB_AUTH}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;

/////////////////////////end url
//set url to mongodb--prior to heroku full deply
const MONGODB_URL = "mongodb://localhost:27017/tasketbasket";
console.log('URL', MONGODB_URL);


//login authentication
app.use(session({
  secret: SESSION_SECRET,
  store: new RedisStore()
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });

//urlencoded parse url
app.use(bodyParser.urlencoded({ extended: false }));
 //parse json
app.use(bodyParser.json());

//this tells the server where to get the static files--the ones that don't change
app.use(express.static(__dirname + "/public"));

//allows you to use the diferent routes
app.use(routes);

mongoose.connect(MONGODB_URL);
mongoose.connection.on('open', () => {
  app.listen(PORT, () => {
  console.log(`${PORT} at your service. Node.js server started`);
  });
});
