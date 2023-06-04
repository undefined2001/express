const express = require('express');
const path = require('path');
const userRoute = require('./routes/user.route');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));




app.use("/user", userRoute);

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "views", "index.html"));
    // response.end();
})


module.exports = app;