import commentModel from "../models/CommentModel.js"

export const addComment = async (req,res) => {
    const {text , username , productId} = req.body
    const newComment = await  commentModel.create({
        text,
        username,
        productId
    }) 
    newComment.save();
    res.json(newComment);
}

export const getComments = async (req,res) => {
    const productId = req.params.productId;
    const comments = await commentModel.find({productId});
    res.json(comments);
}
 
export const deleteComment  = async (req , res) => {
    const {id} = req.params.id
    // await postModal.findOneAndDelete({_id :id , userOwner : req.user._id})
    await commentModel.findOneAndDelete(id)
}