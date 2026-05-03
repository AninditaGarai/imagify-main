import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import userRouter from './routes/userRoutes.js';
import imageRouter from "./routes/imageRoutes.js";


dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json()); // Parses JSON requests
app.use(cors()); // Enables CORS for cross-origin requests

// Database Connection
await connectDB();

// Debugging Logs
console.log("✅ Server started");
console.log("✅ Middleware added");

// Routes
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

// Test Route
app.get("/", (req, res) => res.send("API Working"));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
