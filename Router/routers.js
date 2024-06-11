import express from "express";
import {fetchquery,newquery} from "../Controller/userController.js"
 

const router = express.Router()

router.get('/allquery', fetchquery);
router.post('/newquery', newquery);

export default router