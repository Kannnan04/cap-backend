// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const LoginController = require("../Controller/LoginController.js");
// router.post("/login", LoginController);


// module.exports = router;

import express from 'express';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import { User } from '../Models/userSchema.js';
import Login from "../Controller/LoginController.js"

const router = express.Router();

router.post('/login',Login)

export default router;
