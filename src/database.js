const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'168.197.48.12',
    user:'root',
    password:'matias',
    database:'game_db',
    multipleStatements:true
});

mysqlConnection.connect(function(err){
    if(err){
        console.error(err);
        return;
    }else{
        console.log('db esta conectada');
    }
});

module.exports = mysqlConnection;