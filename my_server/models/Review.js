const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema({
    Id: { type: String, require: false },
    UserId: { type: String, required: false },
    UserName: { type: String, required: false },
    Like: { type: Number, required: false },
    Date: { type: String, required: false },
    Title: { type: String, required: false },
    Image: { type: String, required: false },
    Content: { type: String, required: false },
    thumbPath: { type: String, required: false }
})

module.exports = mongoose.model('Review', Review)