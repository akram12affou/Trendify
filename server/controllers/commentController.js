import commentModel from "../models/CommentModel.js"
import asyncHandler from "express-async-handler";

export const addComment = asyncHandler(async (req,res) => {
    const {text , username , productId} = req.body
    const newComment = await  commentModel.create({
        text,
        username,
        productId,
        userOwner:req.user
    }) 
    newComment.save();
    res.json(newComment);
}) 
  
export const getComments = async (req,res) => {
    const productId = req.params.productId;
    const comments = await commentModel.find({productId});
    res.json(comments);
}
 
export const deleteComment  = async (req , res) => {
    const {id} = req.params.id 
    await commentModel.findOneAndDelete({id , userOwner : req.user._id})
}