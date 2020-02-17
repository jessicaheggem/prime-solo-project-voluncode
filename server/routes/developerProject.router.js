const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const queryText =
        `SELECT * FROM "project"
        JOIN "user_project" ON "project".id = "user_project".project_id
        WHERE "user_project".user_id = $1
        ORDER BY "user_project".id DESC
        LIMIT 1`;
        // not sure if I need the WHERE statement above in order for my GET to work?
    console.log('in developerProject.router GET')
    pool.query(queryText, [req.user.id])
        .then(result => {
            console.log(result.rows);
            res.send(result.rows)
        }).catch(error => {
            console.log(`error in query ${error}`)
            res.sendStatus(500);
        })
})

module.exports = router;