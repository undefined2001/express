const router = require('express').Router();
const { userRegistration, saveUser } = require('../controller/user.controller');

router.get("/register", userRegistration);

router.post("/register", saveUser);

module.exports = router