import express from 'express'
import dotenv from "dotenv";
import { notFound , errorHandler } from './middlewares/errorMiddleware.js';
import { userRouter } from './routes/userRoutes.js';
import { connectDB } from './config/db.js';
const PORT = process.env.PORT || 8888;
dotenv.config();
const app = express();

app.use(express.json());
app.use('/user',userRouter);
connectDB();

app.listen(process.env.PORT , () => {
    console.log('hey');
})

app.use(notFound);
app.use(errorHandler);