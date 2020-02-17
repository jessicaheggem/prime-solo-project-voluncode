const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const queryText =
        `SELECT * FROM "project"
        JOIN "user_project" ON "project".id = "user_project".project_id
        WHERE "project".user_id = $1;`;
        // not sure if I need the WHERE statement above in order for my GET to work?
    pool.query(queryText)
        .then(result => {
            console.log(result.rows);
            res.sendStatus(500);
        })
})

module.exports = router;