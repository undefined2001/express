const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');



require('dotenv').config();
const port = process.env.PORT || 3001;
const dburl = process.env.DBURL;

const connectDB = async (url) => {
    await mongoose.connect(url);
    console.log("Database Connected Successfully!");
}



app.listen(port, async (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server Running at http://localhost:${port}.`);
        await connectDB(dburl);
    }
})
