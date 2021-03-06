require('dotenv').config()
const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

//Settings
app.set('port', PORT);


//CORS  
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next()
});

//ROUTES
app.use(require('./routes/obstacles'));
app.use(require('./routes/portals'));
app.use(require('./routes/bricks'));
app.use(require('./routes/player'));

//Start server
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${PORT}`);
});