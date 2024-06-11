import express from "express";
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from "./Database/connectDB.js";
import LoginRoute from './Router/LoginRoutes.js'
import RegisterRoute from './Router/RegisterRoutes.js'
import ForgotPassword from './Router/ForgotPasswordRoute.js'


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT

app.use("/api", LoginRoute);
app.use("/api", RegisterRoute);
app.use("/api", ForgotPassword);

connectDB()

app.get('/', (req, res) => {
    res.send('backend is running')
})

// app.use('/api',routers)

app.listen(port, () => {
    console.log("App is running", port)
})