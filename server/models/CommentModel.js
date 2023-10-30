import { Schema , model } from "mongoose";

const commentSchema = Schema({
     text:{
      type:String,
      required:true
     },
     productId:{ 
      type:Schema.Types.ObjectId,
      // required:true
     },
     userOwner:{
      type:Schema.Types.ObjectId,
      // required:true
     }, 
     date: {
      type: Date,
      default: Date.now, 
      required: true
    }
});


const commentModel = model('comments' , commentSchema);
export default commentModel;
