import mongoose from "mongoose";

const  ticketSchema = new mongoose.Schema({
   option: String,
   option1: String,
   option2: String,
   detail1: String,
   detail2: String,
   AvailableTime1: Number,
   AvailableTime2 : Number

})

const Ticket = mongoose.model('User', ticketSchema);
export default Ticket