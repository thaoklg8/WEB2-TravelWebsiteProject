const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Id: { type: String, required: false },
    Name: { type: String, required: false },
    Email: { type: String, required: false },
    Phone: { type: String, required: false },
    Password: { type: String, required: false },
    Image: { type: String, required: false }
})

module.exports = mongoose.model('User', UserSchema)