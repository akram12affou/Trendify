import userModel from "../models/userModel.js"
import { responce } from "../utils/errorResponceHandler.js";
import asyncHandler from "express-async-handler";
export const register = asyncHandler(async (req,res) => {
    const {username, email} = req.body
    const user = await userModel.findOne({ $or: [{ username }, { email }] })
    if(user){
        responce(res,'user already exist' ,400);
    }else{
        const newUser = await userModel.create(req.body);
        newUser.save();
        res.json('user created');
    }
})


export const login = asyncHandler(async (req,res) => {
    const {password, email} = req.body
    const user = await userModel.findOne({email});
    if(user){
        const matchedPassword = await user.matchPassword(password)
        if(matchedPassword){
            
        }
        res.json(matchedPassword)
    }else{ 
       responce(res,"user don't exist " ,400);
    }
}) 

