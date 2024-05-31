'use strict';

const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

//require the handlers
const { signUp, login, postPRs, youtube, trackLastPR } = require('./handlers');

express()
  .use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  //USERS ENDPOINTS_______________________________________________________________

  //signUp -> post a new user to the users collection in mongo db
  .post('/signUp', signUp)
  //login -> retrieve info the user from db and login the user 
  .post('/login', login)
  //postPRs -> allowed the user to post his new PRs in the PRs collection to be able to track his achievment
  .post('/postPRs', postPRs)
  //trackNewPR -> Get the last PR the user posted to update in real time his PR
  .get('/trackLastPR', trackLastPR)


  //access to the youtube key for the frontend
  .get('/pre-workout/movement', youtube)
  .get('/pre-workout/bodyArea', youtube)
  .get('/post-workout/movement', youtube)
  .get('/post-workout/bodyArea', youtube)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
