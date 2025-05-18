import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import reviewRoutes from "./routers/review.js"; // Import the reviews routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api/reviews", reviewRoutes); // Mount the reviews routes

// Start the server after connecting to the database
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
});