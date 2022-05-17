const express = require('express')
const app = express()
const port = 3000
    //http reuquest logger
const morgan = require('morgan');
app.use(morgan('combined'));
//mongo
const mongoose = require('mongoose');
//dung voi postman kieu json 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//cors
const cors = require('cors')
app.use(cors('cors'))
    //connect database
const db = require('./config/db');
db.connect();
//import routers
const exampleRouter = require('./routers/example.router');
app.use('/', exampleRouter)

app.listen(port, () => {
    console.log(`My server listening on port ${port}`)
})