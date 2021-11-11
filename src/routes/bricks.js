const express = require('express');
const router = express.Router(); 
const mysqlConnection = require('../database.js');

router.get('/bricks/:levelId', (req, res) => { 
    const { levelId } = req.params; 
    mysqlConnection.query('SELECT * FROM bricks WHERE level_id=?', [levelId],(err, rows, fields) => { 
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;