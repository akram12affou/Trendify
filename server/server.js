import express from 'express'
import dotenv from "dotenv";
import { notFound , errorHandler } from './middlewares/errorMiddleware.js';
import { userRouter } from './routes/userRoutes.js';
import {commentRouter} from './routes/commentRoutes.js';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const PORT = process.env.PORT || 8888;
dotenv.config();
const app = express();
app.use(cookieParser()) 
app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/comment', commentRouter) 
connectDB();

app.listen(8585 , () => {
    console.log('hey');
})

app.use(notFound);
app.use(errorHandler);