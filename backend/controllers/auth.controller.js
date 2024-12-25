import bcrypt from "bcryptjs"

export const register = async (req,res)=>{
    //distructure the request data
    const {username, email, password} = req.body;
    //Hashed the Password
    const hashedPass = await bcrypt.hash(password, 10);
    console.log(hashedPass);
    //create a new USER to save in DB
}
export const login = (req,res)=>{
    console.log("login endpoint!");
}
export const logout = (req,res)=>{
    console.log("logout endpoint!");
}