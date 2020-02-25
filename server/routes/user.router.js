const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const city = req.body.city;
  const state = req.body.state;
  const occupation = req.body.occupation;
  const portfolioUrl = req.body.portfolioUrl;
  const timeAvailable = req.body.timeAvailable;
  const languages = req.body.languages;
  const qualifications = req.body.qualifications;

  const queryText = `INSERT INTO "user" (first_name, last_name, email, username, password, city, state, occupation, portfolio, time_available, languages, qualifications, timestamp) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, now()) RETURNING id;`;
  pool.query(queryText, 
    [firstName, lastName, email, username, password, city, state, occupation, portfolioUrl, timeAvailable, languages, qualifications])
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('in router PUT', req.body);
  let sqlText = `
    UPDATE "user" 
    SET "first_name"=$1, "last_name"=$2, "email"=$3, "city"=$4, "state"=$5, "occupation"=$6, "portfolio"=$7, "time_available"=$8, "languages"=$9, "qualifications"=$10 
    WHERE "id"=${req.params.id};`;
  let values = [req.body.first_name, req.body.last_name, req.body.email, req.body.city, req.body.state, req.body.occupation, req.body.portfolio, req.body.time_available, req.body.languages, req.body.qualifications];
  
  pool.query(sqlText, values)
  .then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });
});

module.exports = router;
