import express from 'express';


const router = express.Router();
 
router.get('/',getProduct);  

export { router as productRouter };