// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const LoginController = require("../Controller/LoginController.js");
// router.post("/login", LoginController);


// module.exports = router;

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../Models/userSchema.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    // const { username, password } = req.body;

    // // Check if user exists
    // const user = await User.findOne({ username });
    // if (!user) return res.status(400).send('Username or password is wrong');

    // // Check password
    // const validPass = await bcrypt.compare(password, user.password);
    // if (!validPass) return res.status(400).send('Invalid password');

    // // Create and assign a token
    // const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    // // res.header('auth-token', token).send(token);
});

export default router;
