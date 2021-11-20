const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');

router.get('/players/', (req, res) => { 
    const { username } = req.query; 
    mysqlConnection.query('SELECT * FROM players WHERE username=?', [username],(err, rows, fields) => { 
        if (!err) { 
            res.json(rows); 
        } else { 
            console.log(err); 
        } 
    }); 
}); 

module.exports = router; 