const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.statics.signup = async function (name, email, password) {
    const exists = await this.findOne({ email: email });
    if (exists) {
        throw new Error("User Already Exists with this Email.")
    }
    if (!validator.isEmail(email)) {
        throw new Error("Please Enter a Valid Email.")
    }
    const salt = await bcrypt.genSalt();
    const hash_pass = await bcrypt.hash(password, salt);
    const user = this.create({ name: name, email: email, password: hash_pass })
    return user;
}

UserSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email: email });
    if (!user) {
        throw new Error("User Does not Exists With This Email.")
    }
    const isPasswordMatching = await bcrypt.compare(password, user.password);

    if (!isPasswordMatching) {
        throw new Error("Wrong Password.")

    }
    const payload = { _id: user._id, email: user.email }
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });
    return token;
}


const User = mongoose.model('User', UserSchema);


module.exports = User;