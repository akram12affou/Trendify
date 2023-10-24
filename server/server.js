import express from 'express'
import dotenv from "dotenv";
import { notFound , errorHandler } from './middlewares/errorMiddleware.js';
import { userRouter } from './routes/userRoutes.js';
import { productRouter } from './routes/CartproductRoutes.js';
import { connectDB } from './config/db.js';
import cors from 'cors'
const PORT = process.env.PORT || 8888;
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/product', productRouter);
connectDB();

app.listen(PORT , () => {
    console.log('hey');
})

app.use(notFound);
app.use(errorHandler);