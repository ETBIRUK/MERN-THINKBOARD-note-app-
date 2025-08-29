import express from "express";
import cors from "cors"
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js";



dotenv.config();

const port = process.env.PORT || 5001;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL

  })

  );

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(rateLimiter); // Apply rate limiter


// Routes
app.use("/api/notes", notesRoutes);

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on PORT: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
  }
};

startServer();
