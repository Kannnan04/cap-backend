import { User } from "../Models/userSchema.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ poperror: "Incorrect password" });
        }

        const token = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.token
        );

        res.json({
            token,
            user: { _id: user._id, name: user.name, email: user.email },
        });
        console.log(token);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default Login;