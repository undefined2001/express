const express = require('express');
const userRouter = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user.models');
const {getAllUser, createUser} = require('../controllers/user.controller');

userRouter.get('/', getAllUser);

userRouter.post('/create', createUser);



module.exports = userRouter