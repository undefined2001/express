const mongoose = require('mongoose');

const Student = mongoose.model('Student', { name: String, id: { type: Number, required: true } });


module.exports = Student;