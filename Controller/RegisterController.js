import { User } from "../Models/userSchema.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

const Register = async (req, res) => {
    try {
        const { name, email, password, address, city, country, pincode, phone } = req.body;

        // Debugging: Log received request body
        console.log('Request Body:', req.body);

        const user = await User.findOne({ email });
        if (user) {
            return res.json({ error: "User already exists" });
        }

        // Ensure password is a string
        if (typeof password !== 'string') {
            return res.status(400).json({ error: "Password must be a string" });
        }

        // Debugging: Log before hashing password
        console.log('Hashing password...');
        const hash = await bcrypt.hash(password, 10);

        // Debugging: Log hashed password
        console.log('Hashed Password:', hash);

        const newUser = await User.create({
            name,
            email,
            password: hash,
            address,
            city,
            country,
            pincode,
            phone,
        });

        // Debugging: Log created user
        console.log('New User:', newUser);

        // Debugging: Log before signing JWT
        console.log('Signing JWT...');
        const token = jwt.sign(
            { email, _id: newUser._id },
            process.env.token
        );

        // Debugging: Log generated token
        console.log('Generated Token:', token);

        res.json({ newUser, token });
    } catch (e) {
        // Debugging: Log error message
        console.error('Error:', e.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
export default Register;