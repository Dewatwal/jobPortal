import mongoose, { mongo } from "mongoose";

// Function to connect to the mongodb database
const connectDB = async ()=>{
  mongoose.connection.on('connected',()=>console.log('DB connected'))
  await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}
export default connectDB
