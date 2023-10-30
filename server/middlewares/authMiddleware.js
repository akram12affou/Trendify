import { responce } from "../utils/errorResponceHandler.js";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";
 
export const verifyUser = asyncHandler(async (req,res,next) => {
    const token = req.headers.token;
    if(!token){
         responce(res ,'not logged in' ,402) 
    }else{
         const isValidUser = await jwt.verify(token,process.env.JWT_SECRET)
         if(isValidUser){
            req.user = await userModel.findById(isTokenCorrect.id)
            next()
         }else{ 
            responce(res ,'unauthorized' ,403)
         }
    }
})
export default verifyUser;