const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const queryText =
        `SELECT * FROM "project"
        JOIN "user_project" ON "project".id = "user_project".project_id;`;
    pool.query(queryText)
        .then(result => {
            console.log(result.rows);
            res.sendStatus(500);
        })
})

module.exports = router;