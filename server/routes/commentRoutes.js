import express from 'express';
import {addComment} from '../controllers/CommentController.js';
const router = express.Router();

router.post('/addComment',addComment);

export { router as commentRouter};