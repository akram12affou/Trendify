import { Schema , model } from "mongoose";

const userSchema = Schema({
     username: {
        type:String,
        required:'username is required',
        unique:true
     },
     email: {
        type:String,
        required:true,
        unique:'email is required'
     },
     password: {
        type:String,
        required:'password is required', 
     }
});


const userModel = model('users' , userSchema);
export default userModel;
