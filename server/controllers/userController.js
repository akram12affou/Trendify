import userModel from "../models/userModel.js"
import { responce } from "../utils/errorResponceHandler.js";
import asyncHandler from "express-async-handler";
export const register = asyncHandler(async (req,res) => {
    const {username,password, email} = req.body
    const user = await userModel.findOne({ $or: [{ username }, { email }] })
    if(user){
        responce('user already exist' ,400) 
    }else{
        res.json('hey')
    }
    // const newUser = await userModel.create(req.body)

    // newUser.save()
   
    
})

