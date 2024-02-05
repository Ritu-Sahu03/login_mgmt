const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email:  { type: String, unique: true, required: true },
    password: String
}, { collection: 'user_info' });

module.exports = mongoose.model('user_info',userSchema);