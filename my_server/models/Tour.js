const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tour = new Schema({
    Id: { type: String, require: true },
    Province: { type: String, required: false },
    Price: { type: Number, required: false },
    Content: { type: String, required: false },
    Destination: { type: String, required: false },
    Transportation: { type: String, required: false },
    Program: { type: String, required: false },
    Image: { type: String, required: false },
    Time: { type: String, required: false },
    Description: { type: String, required: false }
})

module.exports = mongoose.model('Tour', Tour)