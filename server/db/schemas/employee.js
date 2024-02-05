const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    emp_name : String,
    role : String,
    dob : Date
}, { collection: 'emp_info' })

module.exports = mongoose.model('emp_info', empSchema);