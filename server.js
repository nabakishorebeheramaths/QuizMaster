import dotenv from "dotenv";
dotenv.config();

import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import questionRoute from "./routes/question.js";
import quizRoutes from "./routes/quizRoutes.js";


const app = express();

console.log("URI:", process.env.MONGO_URI);
console.log("SMTP_HOST:", process.env.SMTP_HOST);
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/questions", questionRoute);

app.get("/", (req, res) => {
  res.send("🚀 Daily Quiz Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});