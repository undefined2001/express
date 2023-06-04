const router = require('express').Router();
const { addTaskForm, saveTask } = require('../controller/task.controller')

router.get("/addtask", addTaskForm);

router.post("/addtask", saveTask);

module.exports = router