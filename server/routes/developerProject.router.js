const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', (req, res) => {
    const queryText =
        `SELECT * FROM "project"
        JOIN "user_project" ON "project".id = "user_project".project_id
        WHERE "user_project".user_id = $1
        ORDER BY "user_project".id DESC
        LIMIT 1`;
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

router.delete('/:id', (req, res) => {
    console.log(req.user.id, req.params.id)
    // if (loggedin_user == user_id) {
    const queryText =
        `DELETE FROM "user_project" 
        WHERE "user_project".id = $1;`
    console.log('in delete project route')
    pool.query(queryText, [req.params.id])
        .then(() => { 
            res.sendStatus(200) 
        })
        .catch((err) => {
            console.log(err)
            res.sendStatus(500)
        })
    // } else {
    //     res.sendStatus(403)
    // }
});

module.exports = router;