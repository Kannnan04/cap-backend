// import express from "express";
// import bcrypt from "bcryptjs";
// const jwt = require("jsonwebtoken");
// import { User } from "../Models/userSchema.js"

// const RegisterController = require("../Controller/RegisterController.js");
// const router = express.Router()

// router.post("/register", RegisterController);

// function verifyToken(req, res, next) {
//     const token = req.header("Authorization");

//     if (!token) {
//         return res
//             .status(401)
//             .json({ message: "Access denied. No token provided." });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.SECRET);
//         req.token = decoded;
//         next();
//     } catch (error) {
//         res.status(403).json({ message: "Invalid token." });
//     }
// }

// module.exports = router;

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
// import { User } from '../Models/userSchema.js';

const router = express.Router();

router.post('/register', async (req, res) => {
//   const { username, password } = req.body;

//   // Check if user exists
//   const userExists = await User.findOne({ username });
//   if (userExists) return res.status(400).send('Username already exists');

//   // Hash password
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);

//   // Create new user
//   const user = new User({
//     username,
//     password: hashedPassword,
//   });

//   try {
//     await user.save();
//     res.status(201).send('User registered');
//   } catch (err) {
//     res.status(400).send(err);
//   }
 });

export default router;
