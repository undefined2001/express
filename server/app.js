const express = require('express');
const app = express();
const User = require('./models/user.models');
const userRouter = require('./routes/user.router');
const jwt = require('jsonwebtoken');
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.use('/users', userRouter);

app.get('/', (req, res)=>{
    res.json({message:'This is Home.'})
})


module.exports = app;