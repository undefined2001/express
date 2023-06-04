const express = require('express');
const path = require('path');
const taskRoute = require('./routes/task.route');
const Task = require('./models/tasks.models');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));




app.use(taskRoute);


app.get("/", async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (err) {
        console.error(err);
    }
    res.end();
})


module.exports = app;