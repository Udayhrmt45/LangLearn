import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import cookieParser from "cookie-parser";
import path from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true //allow frontend to send cookies
}));
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
    // Only allow frontend at port 5173 (Vite)
    app.use(cors({
      origin: "http://localhost:5173",
      credentials: true,
    }));
  } else {
    // In production, serve the frontend from /dist
    app.use(cors({ origin: true, credentials: true }));
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    
    // Catch-all: send index.html
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
    });
  }
  

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);



  console.log(__dirname);


app.listen(PORT, () => {
    console.log("Server is running on PORT:" + PORT);
    connectDB();
})