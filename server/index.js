'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

// CORS options to allow requests from frontend domain
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

//require the handlers
const { signUp, login, postPRs, youtube, trackLastPR } = require('./handlers');

express()
  .use(cors(corsOptions)) // Add CORS middleware with the options
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

  // USERS ENDPOINTS_______________________________________________________________

  // signUp -> post a new user to the users collection in mongo db
  .post('/signUp', signUp)
  // login -> retrieve info the user from db and login the user 
  .post('/login', login)
  // postPRs -> allowed the user to post his new PRs in the PRs collection to be able to track his achievment
  .post('/postPRs', postPRs)
  // trackNewPR -> Get the last PR the user posted to update in real time his PR
  .get('/trackLastPR', trackLastPR)

  // access to the youtube key for the frontend
  .get('/pre-workout/movement', youtube)
  .get('/pre-workout/bodyArea', youtube)
  .get('/post-workout/movement', youtube)
  .get('/post-workout/bodyArea', youtube)

  // Define route handler for the root URL (`/`)
  .get('/', (req, res) => {
    res.send('Welcome to Motion Mind Fitness Journey!');
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
