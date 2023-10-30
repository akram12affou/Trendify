import commentModel from "../models/CommentModel.js"

export const addComment = async (req,res) => {
    const newComment = await  commentModel.create({
        text:'beg',
    })
    newComment.save();
}