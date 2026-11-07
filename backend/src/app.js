import express from "express"
import authRouter from "./routes/auth.routes.js";
const app=express()
app.use(express.json())

app.use("/v1/api/auth",authRouter) // auth routes
export default app;