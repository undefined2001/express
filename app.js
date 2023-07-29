const express = require('express');
const app = express();
const User = require('./models/user.models');
const userRouter = require('./routes/user.router');

app.use(express.json());

app.use('/users', userRouter);

app.get('/', (req, res)=>{
    res.json({message:'This is Home.'})
})


module.exports = app;