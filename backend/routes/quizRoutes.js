import express from "express";
import QuizAttempt from "../models/QuizAttempt.js";

const router = express.Router();

// Submit Quiz
router.post("/submit", async (req, res) => {
  try {
    const { user, score, totalQuestions, answers } = req.body;

    const percentage = (score / totalQuestions) * 100;

    const attempt = await QuizAttempt.create({
      user,
      date: new Date().toISOString().split("T")[0],
      score,
      totalQuestions,
      percentage,
      answers,
    });

    res.json({
      success: true,
      attempt,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get Quiz History
router.get("/history/:userId", async (req, res) => {
  try {
    const attempts = await QuizAttempt.find({
      user: req.params.userId,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      attempts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;