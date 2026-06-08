import { readTransformValue } from "framer-motion"
import User from "../models/User.js"

export const addUser = async(req, res)=>{
    const user = await User.create(req.body)
    if(!user)
        res.status(404).send("user not added")
    res.status(201).json({user, success:true, msg:"user added"})
}
export const getUser = async(req, res)=>{
    const user = await User.findAll()
    if(!user)
        res.status(404).send("users not found")
    res.status(201).json({user, success:true, msg:"users found"})
}
