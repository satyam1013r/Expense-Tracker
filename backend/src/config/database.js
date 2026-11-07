import config from"./config.js"
import mongoose from "mongoose";
import dns from "node:dns"

// Use Google's DNS servers
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const connectDb=async()=>{
    try {
        await mongoose.connect(config.MONGO_URL)
        console.log("Database connect successfully!")
    } catch (error) {
        console.log("DB ERROR:",error)
    }
}


export default connectDb;