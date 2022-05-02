const express = require('express');
const router = express.Router();
router.get('/', function(req, res) {
        res.send("OK User");
    })
    //import models
const User = require('../models/User')
    // const Intro = require('../models/Intro')
const Tour = require('../models/Tour')

// get all users
// router.get('/users', function(req, res) {
//     User.find({}, function(err, data) {
//         if (err) {
//             res.json({ message: err.message })
//         } else {
//             res.json(data)
//         }
//     })
// })

// get all tour
router.get('/tours', function(req, res) {
        Tour.find({}, function(err, data) {
            if (err) {
                res.json({ message: err.message })
            } else {
                res.json(data)
            }
        })

    })
    // insert tour
router.post('/tour', async function(req, res) {
        let tour = new Tour({
            Id: req.body.Id,
            Province: req.body.Province,
            Price: req.body.Price,
            Content: req.body.Content,
            Destination: req.body.Destination,
            Transportation: req.body.Transportation,
            Description: req.body.Description,
            Time: req.body.Time,
            Program: req.body.Program,
            Image: req.body.Image,
        })
        try {
            p = await tour.save();
            res.json({ message: "success" })
        } catch (err) {
            res.json({ message: err.message })
        }
    })
    // update Tour
router.patch("/:tourId", async(req, res) => {
        try {
            await Tour.updateOne({ _id: req.params.tourId }, {
                $set: {
                    Id: req.body.Id,
                    Province: req.body.Province,
                    Price: req.body.Price,
                    Content: req.body.Content,
                    Destination: req.body.Destination,
                    Transportation: req.body.Transportation,
                    Description: req.body.Description,
                    Time: req.body.Time,
                    Program: req.body.Program,
                    Image: req.body.Image
                }
            })
            res.json({ message: "success" })
        } catch (err) {
            console.log(err.message);
            res.json({ message: err.message })
        }
    })
    //delete tour
router.delete('/:tourId', async(req, res) => {
        try {
            await Tour.deleteOne({ _id: req.params.tourId })
            res.json({ message: "success" })
        } catch (err) {
            res.json({ message: err.message })
        }

    })
    /////////////////////////
    // get product by id
router.get('/:userId', async function(req, res) {
    // console.log(req.params.id)
    try {
        const data = await User.findById(req.params.userId)
        res.json(data)
    } catch (err) {
        res.json({ message: err.message })
    }

})

// insert product
router.post('/user', async function(req, res) {
    // console.log('Data from client', req.body)
    // res.send("Server recieved data!")
    let user = new User({
        name: req.body.name,
        email: req.body.email
    })
    try {
        p = await user.save();
        res.json({ message: "success" })
    } catch (err) {
        res.json({ message: err.message })
    }
})

// update User
router.patch("/:userId", async(req, res) => {
    try {
        await User.updateOne({ _id: req.params.userId }, {
            $set: { price: req.body.price, name: req.body.name }
        })
        res.json({ message: "success" })
    } catch (err) {
        console.log(err.message);
        res.json({ message: err.message })
    }
})


//delete User



module.exports = router;