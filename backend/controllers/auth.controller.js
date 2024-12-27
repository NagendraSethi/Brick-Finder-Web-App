import bcrypt from "bcryptjs"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    //distructure the request data
    const { username, email, password } = req.body;
    try {
        //Hashed the Password
        const hashedPass = await bcrypt.hash(password, 10);
        console.log(hashedPass);

        //create a new USER to save in DB
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPass,
            },
        });
        console.log(newUser);
        res.status(201).json({ message: "User created successfully" })
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Failed to create user!" })
    }
}
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        //CHECK IF THE USER EXISTING
        const user = await prisma.user.findUnique({
            where: {
                username
            },
        });
        if (!user) return res.status(401).json({ message: "Invalid Credentials!" });

        //CHECK IF THE PASSWORD IS CORRECT
        const isPasswordCheck = await bcrypt.compare(password, user.password);
        if (!isPasswordCheck) return res.status(401).json({ message: "Invalid Credentials!" });

        //CHECK COOKIE TOKEN AND SEND TO THE USER
        // res.setHeader('Set-Cookie', 'test=' + "myValue").json('success');
        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign({
            id: user.id,
        }, process.env.JWT_SECRET_KEY,
            { expiresIn: age }
        );

        res
            .cookie("token", token, {
                httpOnly: true,
                // secure:true,
                maxAge: age,
            }).status(200).json({ message: "Login successful" });

    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Failed to login!" })
    }
}
export const logout = (req, res) => {
    res.clearCookie("token").json({ message: "Logged out successfully" });
    console.log("logout endpoint!");
}