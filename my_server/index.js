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
//import model
// const User = require('./models/User');
// const IntroTour = require('./models/Intro');


// app.get('/', (req, res) => {
//         res.send("Hello hello")
//     })
// app.get('/products', (req, res) => {
//doc du lieu ao
// data = [
//     { productCode: 1, productName: "Heineken", productPrice: 19000 },
//     { productCode: 2, productName: "Tiger", productPrice: 18000 },
//     { productCode: 3, productName: "Sapporo", productPrice: 21000 }
// ]
// res.send(data)

//doc du lieu tu db
//cach 1:
// Product.find({}, (err, data) => {
//     if (err) {
//         res.json({ "Error": err.message })
//     } else {
//         res.json(data)
//     }
// })

//cach 2:
//     Product.find({})
//         .then(data => res.json(data))
//         .catch(err => res.json({ message: err.message }))

// })

//import routers
const exampleRouter = require('./routers/example.router');
app.use('/', exampleRouter)

app.listen(port, () => {
    console.log(`My server listening on port ${port}`)
})