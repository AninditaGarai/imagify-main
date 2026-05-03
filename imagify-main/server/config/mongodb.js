import mongoose from "mongoose"; 

const connectDB = async ()=>{

    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

    const baseUri = mongoUri.replace(/\/$/, "");
    const dbUri = /\/imagify$/i.test(baseUri) ? baseUri : `${baseUri}/imagify`;

    mongoose.connection.on('connected',()=>{
        console.log("Database Connected")
    })
    await mongoose.connect(dbUri)
}

export default  connectDB;