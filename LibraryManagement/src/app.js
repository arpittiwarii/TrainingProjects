import express, { urlencoded } from "express"
import { connectDB } from "./config/database.js";
import './models/index.js'
import ErrorHandler from "./middleware/errorHandler.js";
import Routes from './routes/index.js'
import dotenv from "dotenv"
import { createRoutesStub } from "react-router-dom";
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api", Routes)

connectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("Server Started")
    })
})
app.use(ErrorHandler)
export default app;
