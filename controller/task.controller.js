const path = require('path');
const Task = require('../models/tasks.models');
const { error } = require('console');


exports.addTaskForm = (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'views', 'form.html'));
}

exports.saveTask = (req, res) => {
    const { title, des } = req.body;
    const task = new Task({ title: title, description: des });
    task.save()
        .then(() => res.send("Task Added Successfully."))
        .catch((error) => res.send(error.message));
}