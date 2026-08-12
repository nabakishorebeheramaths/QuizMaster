import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import questionRoute from "./routes/question.js";
import quizRoutes from "./routes/quizRoutes.js";
import dailyQuizRoutes from "./routes/dailyQuizRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();

/*
========================================
DATABASE
========================================
*/

connectDB();

/*
========================================
MIDDLEWARE
========================================
*/

const app = express();

connectDB();

app.use(
  cors({
    origin: "https://quizmaster.naba.workers.dev",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/questions", questionRoute);
app.use("/api/daily-quiz", dailyQuizRoutes);
app.use("/api/contact", contactRoutes);
/*
========================================
HEALTH CHECK
========================================
*/

app.get("/", (req, res) => {
  res.send("🚀 Daily Quiz Backend is Running...");
});

/*
========================================
SERVER
========================================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});