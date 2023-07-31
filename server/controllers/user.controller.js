const mongoose = require('mongoose');
const User = require('../models/user.models');
const bcrypt = require('bcrypt');

const getAllUser = async (req, res) => {
    const users = await User.find({}, { password: false })
    res.status(200).json(users);
}

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.signup(name, email, password);
        res.status(202).json({ message: 'User Created Successfully.' });
    } catch (error) {
        res.json({ message: error.message });
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await User.login(email, password);

        if (token) {
            res.status(200).json({
                message: "Logged in Successfully.",
                token: token
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}


module.exports = { getAllUser, createUser, userLogin }