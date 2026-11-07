import usermodel from "../models/users/user.model.js";
import bcrypt from "bcrypt";

export async function register(req, res) {
  // register
  try {
    const { username, email, password } = req.body;
    const isAlreadyRegister = await usermodel.findOne({
      $or: [{ username }, { email }],
    });

    if (isAlreadyRegister) {
      return res.status(409).json({ message: "Email or username already Exist" });
    }
    // pass hash and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await usermodel.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({message:"User created successfully!",
        user:{
            username:user.username,
            email:user.email
        }
    })
  } catch (error) {
    return res.status(500).json({message:"internal server Error"})
  }
}

export async function login(req, res) { // login
    try {
        const {email,password}=req.body;
       
        const user=await usermodel.findOne({email})
       if(!user){
        return res.status(401).json({message:"Invalid username or email"})
       }
       const isValidPassword=await bcrypt.compare(password,user.password)
       if(!isValidPassword){
        return res.status(401).json({message:"Invalid password!"})
       }

       // respond 
       return res.status(200).json({message:"Login successfull",})
        
    } catch (error) {
        return res.status(500).json({message:"Internal server Error"})
    }
}
