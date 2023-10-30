import express from 'express';
import verifyUser from '../middlewares/authMiddleware.js';
import {addComment,getComments} from '../controllers/CommentController.js';
const router = express.Router();
router.get('/:productId',getComments)
router.post('/addComment',addComment);

export { router as commentRouter};