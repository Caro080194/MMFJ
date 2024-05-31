//To make my code cleaner and organize each handler have there own files and get imported here to be then exported in the index.js

//Users handlers for sign up and login
const signUp = require('./handlers/signUp');
const login = require('./handlers/login');
const youtube = require('./handlers/youtube');
const postPRs = require('./handlers/postPRs');
const trackLastPR = require('./handlers/trackLastPR');





module.exports = {signUp, login, postPRs, youtube, trackLastPR};