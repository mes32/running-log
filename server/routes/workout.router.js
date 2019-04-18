const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const selectText = `
        SELECT
            id,
            last_updated,
            distance_miles,
            duration_minutes,
            incline_percent,
            terrain
        FROM workout
        ORDER BY last_updated DESC;
    `;
    pool.query(selectText).then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log(error);
        console.log('Error in route GET /api/workout');
    });
});

router.post('/', (req, res) => {
    const workout = req.body;
    const insertText = `
        INSERT INTO workout
        (distance_miles, duration_minutes, incline_percent)
        VALUES
        ($1, $2, $3);
    `;
    pool.query(insertText, [workout.distance_miles, workout.duration_minutes, workout.incline_percent]).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        console.log('Error in route POST /api/workout');
    });
});

module.exports = router;