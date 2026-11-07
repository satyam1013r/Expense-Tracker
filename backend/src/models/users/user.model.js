import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        unique:[true,"username must be unique"],
    },
    password:{
        type:String,
        required:[true,"Password is required"],      
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email must be unique"],
    }

})
const usermodel=mongoose.model("users",userSchema)
export default usermodel;
