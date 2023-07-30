const mongoose = require('mongoose');
const User = require('../models/user.models');
const bcrypt = require('bcrypt');

const getAllUser = async (req, res) => {
    const users = await User.find({}, { password: false })
    res.status(200).json(users);
}

const createUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hash_pass = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash_pass
        });
        await user.save();
        res.status(202).json({ message: 'User Created Successfully.' });
    } catch (error) {
        res.json({ message: 'Can Create User' });
    }
}

const userLogin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' })
        }

        const value = await bcrypt.compare(req.body.password, user.password);

        if (value) {
            res.status(200).json({ message: 'Logged in Successfully.' });
        } else {
            res.status(200).json({ message: 'Wrong Password.' })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}


module.exports = { getAllUser, createUser, userLogin }