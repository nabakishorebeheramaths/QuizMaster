import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

import express from "express";

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

const allowedOrigin = "https://quizmaster.naba.workers.dev";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/questions", questionRoute);
app.use("/api/daily-quiz", dailyQuizRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Daily Quiz Backend is Running...");
});