import { Schema , model } from "mongoose";

const userSchema = Schema({
     username: {
        type:String,
        required:true,
     },
     email: {
        type:String,
        required:true,
     },
     password: {
        type:String,
        required:true,
     }
});

const userModel = model('users' , userSchema);
export default userModel;
