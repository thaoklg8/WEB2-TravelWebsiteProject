const express = require('express');
const router = express.Router();
//import models
const User = require('../models/User')
const Tour = require('../models/Tour')
const Review = require('../models/Review')
const Comment = require('../models/Comment')

router.get('/', function(req, res) {
    res.send("OK..");
})


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
router.get('/tours/6', function(req, res) {
    Tour.find({}, function(err, data) {
        if (err) {
            res.json({ message: err.message })
        } else {
            res.json(data)
        }
    }).limit(6)
})
router.get('/tours/3', function(req, res) {
        Tour.find({}, function(err, data) {
            if (err) {
                res.json({ message: err.message })
            } else {
                res.json(data)
            }
        }).limit(3)
    })
    // get search tour
router.get('/tours/search/:name', function(req, res) {
    // var search = req.params.name;
    Tour.find({ Destination: { $regex: req.params.name, $options: 'i' } }, function(err, data) {
        if (err) {
            res.json({ message: err.message })
        } else {
            res.json(data)
        }
    })
})

// get tour by id
router.get('/tour/:tourId', async function(req, res) {
    try {
        const data = await Tour.findById(req.params.tourId)
        res.json(data)
    } catch (err) {
        res.json({ message: err.message })
    }

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
    // get all users
router.get('/users', function(req, res) {
        User.find({}, function(err, data) {
            if (err) {
                res.json({ message: err.message })
            } else {
                res.json(data)
            }
        })
    })
    // get user by id
router.get('/user/:userId', async function(req, res) {
    try {
        const data = await User.findById(req.params.userId)
        res.json(data)
    } catch (err) {
        res.json({ message: err.message })
    }

})

// insert user
router.post('/user/user', async function(req, res) {
    let user = new User({
        Id: req.body.Id,
        Name: req.body.Name,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Password: req.body.Password,
        Role: req.body.Role,
        Image: req.body.Image,
        Location: req.body.Location,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        Aboutme: req.body.Aboutme,
    })
    try {
        p = await user.save();
        res.json({ message: "success" })
    } catch (err) {
        res.json({ message: err.message })
    }
})

// update User
router.patch("/user/:userId", async(req, res) => {
    try {
        await User.updateOne({ _id: req.params.userId }, {
                $set: {
                    Id: req.body.Id,
                    Name: req.body.Name,
                    Email: req.body.Email,
                    Phone: req.body.Phone,
                    Password: req.body.Password,
                    Role: req.body.Role,
                    Image: req.body.Image,
                    Location: req.body.Location,
                    Gender: req.body.Gender,
                    DOB: req.body.DOB,
                    Aboutme: req.body.Aboutme,
                }
            })
            // p = await user.save();
        res.json({ message: "success" })
    } catch (err) {
        console.log(err.message);
        res.json({ message: err.message })
    }
})


//delete User
router.delete('/user/:userId', async(req, res) => {
        try {
            await User.deleteOne({ _id: req.params.userId })
            res.json({ message: "success" })
        } catch (err) {
            res.json({ message: err.message })
        }

    })
    //////////////////////review
    //get all reviews
router.get('/reviews', function(req, res) {
        Review.find({}, function(err, data) {
            if (err) {
                res.json({ message: err.message })
            } else {
                res.json(data)
            }
        })
    })
    // get review by id
router.get('/review/:reviewId', async function(req, res) {
    try {
        const data = await Review.findById(req.params.reviewId)
        res.json(data)
    } catch (err) {
        res.json({ message: err.message })
    }
})

// get search reviews
router.get('/reviews/search/:name', function(req, res) {
    // var search = req.params.name;
    Review.find({ Content: { $regex: req.params.name, $options: 'i' } }, function(err, data) {
        if (err) {
            res.json({ message: err.message })
        } else {
            res.json(data)
        }
    })
})

//get all comments
router.get('/comments', function(req, res) {
        Comment.find({}, function(err, data) {
            if (err) {
                res.json({ message: err.message })
            } else {
                res.json(data)
            }
        })
    })
    //get comment by id review
router.get('/comment/:reviewId', async function(req, res) {
    Comment.find({ ReviewId: req.params.reviewId }, function(err, data) {
        if (err) {
            res.json({ message: err.message })
        } else {
            res.json(data)
        }
    })
})


module.exports = router;