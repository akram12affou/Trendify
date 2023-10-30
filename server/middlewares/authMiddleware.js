import { responce } from "../utils/errorResponceHandler";
import { verify } from "jsonwebtoken";
export const verifyUser = async (req,res) => {
    const cookie = req.header.authontication;
    if(!token){
         responce(res ,'not logged in' ,402)
    }else{
         const isValidUser = await verify(cookie,process.env.JWT_SECRET)
         if(isValidUser){
        
         }else{
            responce(res ,'unauthorized' ,403)
         }
    }

}