const mongoose = require('mongoose');
const User = require('../models/user.models');


const getAllUser = async (req, res) => {
    const users = await User.find({}, { password: false })
    res.status(200).json(users);
}

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(202).json({ message: 'User Created Successfully.' });
    } catch (error) {
        res.json({message:'Can Create User'});
    }
}


module.exports = { getAllUser, createUser }