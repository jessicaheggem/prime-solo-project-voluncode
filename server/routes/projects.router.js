const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "project";'
    console.log('in projects.router GET')
    pool.query(queryText)
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in project GET', error)
            res.sendStatus(500);
        })
});

router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "project" WHERE "project".id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT project query', err);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
// router.post('/', (req, res) => {

// });

module.exports = router;