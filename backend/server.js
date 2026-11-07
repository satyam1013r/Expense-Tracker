import app from "./src/app.js";
import connectDb from "./src/config/database.js";
connectDb()
app.listen(5000,()=>{
    console.log(`App running `)
})