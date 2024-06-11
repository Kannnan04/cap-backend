import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
   option: String,
   option1: String,
   option2: String,
   detail1: String,
   detail2: String,
   AvailableTime1: Number,
   AvailableTime2: Number

})

const UserSchema = new mongoose.Schema({
   name: String,
   password: String,
   email: { type: String, lowercase: true },
   address: String,
   city: String,
   country: String,
   pincode: String,
   phone: String,
});

const User = mongoose.model('User', UserSchema);
const Ticket = mongoose.model('Ticket', ticketSchema);

export {User,Ticket}
