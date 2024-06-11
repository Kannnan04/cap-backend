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
import Register from "../Controller/RegisterController.js"

const router = express.Router();

router.post('/register', Register)



export default router;
