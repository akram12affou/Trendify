import { Schema , model,Types } from "mongoose";
const commentSchema = Schema({
     text:{
      type:String,
      required:true
     },
     productId:{ 
      type:Number,
      required:true
     },
     username:{
      type:String,
      required:true
     }, 
     userOwner :{
      type: Types.ObjectId,
      required : true, 
    },
     date: {
      type: Date,
      default: Date.now, 
      required: true
    }
});


const commentModel = model('comments' , commentSchema);
export default commentModel;
