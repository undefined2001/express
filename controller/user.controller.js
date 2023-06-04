const path = require('path');
const Student = require('../models/student.models')
exports.userRegistration = (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'views', 'form.html'));
    // res.send("This is Register Page");
    // res.end();
}

exports.saveUser = (req, res) => {
    const { name, id } = req.body;
    const student = new Student({ name: name, id: id });
    student.save().then(() => console.log("Saved Successfully."));
    res.send("User Created Successfully.")
}