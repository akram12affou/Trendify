import express from 'express';
import verifyUser from '../middlewares/authMiddleware.js';
import {addComment,getComments,deleteComment} from '../controllers/CommentController.js';
const router = express.Router();
router.get('/:productId',getComments)
router.post('/addComment',verifyUser,addComment);
router.delete('/delete/:id' ,verifyUser, deleteComment)
 
export { router as commentRouter};