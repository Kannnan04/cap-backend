import express from "express"
import { ForgotPassword } from "../Controller/ForgotPassword.js"

const router = express.Router();


router.put("/forgotpassword", ForgotPassword);

export default router;