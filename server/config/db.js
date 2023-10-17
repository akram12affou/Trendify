import mongoose from "mongoose";
const connectDB =async () => {
     mongoose.connect(process.env.MONGO_URI
      ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
      ).then(res => {
        console.log('mongoo conected') 
     })   
}
export  {connectDB}