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

const PORT = process.env.PORT || 5000;

/* =========================
   DATABASE
========================= */

connectDB();

/* =========================
   CORS
========================= */

const allowedOrigins = [
  // Render frontend
  "https://quizmaster-1-kqc7.onrender.com",

  // Old Cloudflare frontend
  "https://quizmaster.naba.workers.dev",

  // Custom domain - keep for future use
  "https://quizmaster.com",

  // Local development
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without Origin header
      // Postman, curl, server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ CORS blocked origin:", origin);

      return callback(new Error("Not allowed by CORS"));
    },

    credentials: true,

    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],

    optionsSuccessStatus: 204,
  })
);

/* =========================
   BODY PARSER
========================= */

app.use(express.json());

/* =========================
   API ROUTES
========================= */

app.use("/api/auth", authRoutes);

app.use("/api/quiz", quizRoutes);

app.use("/api/questions", questionRoute);

app.use("/api/daily-quiz", dailyQuizRoutes);

app.use("/api/contact", contactRoutes);

/* =========================
   HEALTH CHECK
========================= */

app.get("/", (req, res) => {
  res.status(200).send("🚀 Daily Quiz Backend is Running...");
});

/* =========================
   404 HANDLER
========================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
    path: req.originalUrl,
  });
});

/* =========================
   ERROR HANDLER
========================= */

app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);

  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS origin not allowed",
      origin: req.headers.origin || null,
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

/* =========================
   START SERVER
========================= */

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});