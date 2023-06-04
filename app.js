const express = require('express');
const path = require('path');
const userRoute = require('./routes/user.route');
const Student = require('./models/student.models');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));




app.use("/user", userRoute);


async function getAllStudents() {
    
}


app.get("/", async (req, res) => {
    try {
        const students = await Student.find({});
        res.send(students);
    } catch (err) {
        console.error(err);
    }
    res.end();
})


module.exports = app;