const mongoose = require('mongoose');

const Task = mongoose.model('Task', { title: String, description:{type:String, required:true} });

module.exports = Task;