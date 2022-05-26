const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    Id: { type: String, require: false },
    UserId: { type: String, required: false },
    ReviewId: { type: String, required: false },
    Content: { type: String, required: false }

})

module.exports = mongoose.model('Comment', Comment)