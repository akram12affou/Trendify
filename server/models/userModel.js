import { Schema , model } from "mongoose";
import bcrypt from 'bcrypt';

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

userSchema.pre('save', async function (next) {
   this.password = await bcrypt.hash(this.password, 10);
   next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
   return await bcrypt.compare(enteredPassword, this.password);
};

const userModel = model('users' , userSchema);
export default userModel;
