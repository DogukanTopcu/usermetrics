import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from "cors";

import { ConnectMongo 
  // ConnectMysql 
} from "./configs/db.js";
// import syncDatabase from './test/syncDatabase.js';
import config from "./configs/cors.js";
import landingPageRouter from './routers/lpRouter.js';
import discordRouter from './routers/discordRouter.js';
// import userRouter from "./routers/user.router.js";

import { rateLimit } from "express-rate-limit";
// const sendEmail = ('./controllers/sendEmail.js');

ConnectMongo();
// ConnectMysql();

var app = express();
app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve('public')));

app.use(cors(config));

const limiter = rateLimit({
  windowMs: 1000,
  limit: 5,
});

app.use(limiter);


app.get('/', function(req, res, next) {
  res.render('index', { title: 'User Metrics Server' });
});

// app.get("/syncDatabase", (req, res) => {
//   syncDatabase();
//   res.render('index', { title: 'Database Synced' })
// });

app.use("/api/lp/emails", landingPageRouter);
app.use("/api/discord", discordRouter);

// app.use("/api/product/v1/user", userRouter);


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


export default app;