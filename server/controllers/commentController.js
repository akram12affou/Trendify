import commentModel from "../models/CommentModel.js"

export const addComment = async (req,res) => {
    const newComment = await  commentModel.create({
        text:'begg',
        username : 'akram',
        productId:1
    })
    newComment.save();
    res.json(newComment);
}

export const getComments = async (req,res) => {
    const productId = req.params.productId;
    const comments = await commentModel.find({productId});
  
    res.json(comments);
}