const express = require('express')
const app = express()
const port = 3000



const path = require('path')
const multer = require('multer')
    //API upload file
var storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
let maxSize = 10 * 1024 * 1024; //10mb
var upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }

}).single("file")
const Review = require('./models/Review')
app.post("/review/upload/post", (req, res) => {
    upload(req, res, async(err) => {
        res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "X-Requested-With");
        // next()
        if (err) {
            res.json({ message: err.message })
        } else {
            console.log("File received: %d", req.file.filename)

            //Insert data into db
            let reviewtInfo = new Review({
                UserName: req.body.UserName,
                Title: req.body.Title,
                Content: req.body.Content,
                Date: req.body.Date,
                thumbPath: req.file.filename
            })
            await reviewtInfo.save()
            res.json({ message: "success" })
        }


    })

})

/////////////////


app.use(express.static(path.join(__dirname, '/images')))

//http reuquest logger
const morgan = require('morgan');
app.use(morgan('combined'));
//mongo
const mongoose = require('mongoose');
//dung voi postman kieu json 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))
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