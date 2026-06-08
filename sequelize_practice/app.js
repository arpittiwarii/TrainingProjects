import express from 'express'
import {sequelize, connectDB} from './config/db.js'
import userRoutes from "./routes/userRoutes.js"

const app = express()
app.use(express.json())

app.use("/user", userRoutes)


connectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("Server started")  
    })
}).catch((err)=>{
    console.log("error in server : ",err)
})