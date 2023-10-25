import userModel from "../models/userModel.js"
import { responce } from "../utils/errorResponceHandler.js";
import asyncHandler from "express-async-handler";
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/generateToken.js";

 
export const register = asyncHandler(async (req,res) => {
    const {username,email,password} = req.body
    const user = await userModel.findOne({ $or: [{ username }, { email }] });
    if(user){ 
        responce(res,'user already exist' ,400);
    }else{
         const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create(
            {
                username, 
                email,
                password:hashedPassword
            }
        );
        newUser.save();
        const cookie = await generateToken(res,newUser._id)
        res.json({newUser,cookie});
    }
})


export const login = asyncHandler(async (req,res) => {
    const {password,email} = req.body;
    const user = await userModel.findOne({ email });
    if(user){ 
        const matchedPassword = await bcrypt.compare(password,user.password);
        if (matchedPassword) {
            const cookie = await generateToken(res,user._id)
             res.json({user,cookie});
          } else {
            responce(res,'Wrong Credential',403);
          }
    }else{ 
       responce(res,"user don't exist",404);
    }
}) 

