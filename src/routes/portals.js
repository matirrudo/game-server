const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');

router.get('/portals/:levelId', (req, res) => { 
    const { levelId } = req.params; 
    const { type } = req.query; 
    mysqlConnection.query('SELECT * FROM portals WHERE level_id=? AND type=?', [levelId, type],(err, rows, fields) => { 
        if (!err) { 
            res.json(rows); 
        } else { 
            console.log(err); 
        } 
    }); 
}); 

router.get('/portals/level/:levelId', (req, res) => { 
    const { levelId } = req.params; 
    mysqlConnection.query('SELECT * FROM portals WHERE level_id=?', [levelId],(err, rows, fields) => { 
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


module.exports = router; 