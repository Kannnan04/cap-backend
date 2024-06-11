import { Ticket } from "../Models/userSchema.js"


// put call
 export const fetchquery = async(req,res)=>{
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} 
// post call
 export const newquery = async(req,res)=>{
    const  {option, option1,option2,detail1,detail2,AvailableTime1,AvailableTime2}  = req.body;
    const ticket = new Ticket({ option, option1,option2,detail1,detail2,AvailableTime1,AvailableTime2});

    try {
        const newTicket = await ticket.save();
        res.status(200).json({message:"register Successfully", data:newTicket});
    } catch (err) {
        res.status(400).json({ message:"Incorrect Data" });
    }
}

  