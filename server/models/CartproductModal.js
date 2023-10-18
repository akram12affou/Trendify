import { Schema , model } from "mongoose";

const productSchema = Schema({
     id: {
        type:String,
        required:true,
        unique:true
     },
     name: {
        type:String,
        required:true,
        unique:true
     },
     image: {
        type:String,
        required:true, 
     },
     userOwner:{
        type:Schema.Types.ObjectId,
        required:true,
     }
});


const productModel = model('products',productSchema);
export default productModel;
