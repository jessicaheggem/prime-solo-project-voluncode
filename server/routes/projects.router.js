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
    const queryText = `SELECT * FROM "project" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});


router.post('/', (req, res) => {
    console.log('in post router')
    const project = req.user;
    console.log(project)
    const queryText = `
        INSERT INTO "user_project" (user_id, project_id)
        VALUES ($1, $2);`;
    const queryValues = [
        project.user_id,
        project.project_id
    ];
    pool.query(queryText, queryValues)
    .then(()=> {
        res.sendStatus(201);
        console.log(queryValues)
    }).catch((err) => {
        console.log('Error in POST on projects.router', err);
        res.sendStatus(500);
    })
});

module.exports = router;