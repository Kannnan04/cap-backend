import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const mongo = process.env.MONGODBCONNECTION
const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(mongo)
        console.log("connected success");
        return connection
    } catch (error) {
        console.log("connection unsuccessfull");
    }
}

export default connectDB