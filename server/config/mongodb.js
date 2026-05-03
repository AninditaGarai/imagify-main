import mongoose from "mongoose"; 

const connectDB = async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("Database Connected")
    })
    if(!process.env.MONGODB_URI){
        console.log('MONGODB_URI not set; skipping database connection in development.');
        return;
    }

    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
}

export default  connectDB;