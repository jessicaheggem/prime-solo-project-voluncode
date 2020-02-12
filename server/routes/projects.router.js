const express = require('express');
const pool = require('../modules/pool');
const projectsRouter = express.Router();

/**
 * GET route template
 */
projectsRouter.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "project";'
    console.log('in projects.router GET')
    pool.query(queryText)
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in favorite GET', error)
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
// router.post('/', (req, res) => {

// });

module.exports = projectsRouter;