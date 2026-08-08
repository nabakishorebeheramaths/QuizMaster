import express from "express";
import QuizAttempt from "../models/QuizAttempt.js";

const router = express.Router();

// =====================================================
// SUBMIT QUIZ
// =====================================================

router.post("/submit", async (req, res) => {
  console.log("🔥 /quiz/submit called");
  console.log(req.body);

  try {
    const {
      user,
      userName,
      score,
      totalQuestions,
      answers,

      // Course / Subject information
      courseId,
      courseName,
      subject,
      subjectId,
      quizType,
    } = req.body;

    // =================================================
    // REQUIRED DATA
    // =================================================

    if (
      !user ||
      score === undefined ||
      !totalQuestions
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing quiz data",
      });
    }

    // =================================================
    // CALCULATE PERCENTAGE
    // =================================================

    const percentage = Number(
      ((score / totalQuestions) * 100).toFixed(2)
    );

    // =================================================
    // CREATE QUIZ ATTEMPT
    // =================================================

    const attempt = await QuizAttempt.create({
      user,

      userName,

      date: new Date()
        .toLocaleDateString("en-CA", {
          timeZone: "Asia/Kolkata",
        }),

      score,

      totalQuestions,

      percentage,

      answers,

      // ===============================================
      // COURSE INFORMATION
      // ===============================================

      courseId: courseId || null,

      courseName: courseName || null,

      subject: subject || null,

      subjectId: subjectId || null,

      quizType: quizType || "daily",
    });

    console.log(
      "✅ Quiz Attempt Saved:",
      attempt._id
    );

    return res.status(201).json({
      success: true,
      message: "Quiz submitted successfully",
      attempt,
    });
  } catch (error) {
    console.log(
      "❌ Submit Error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// =====================================================
// GET QUIZ HISTORY
// =====================================================

router.get("/history/:userId", async (req, res) => {
  try {
    const attempts =
      await QuizAttempt.find({
        user: req.params.userId,
      }).sort({
        createdAt: -1,
      });

    return res.json({
      success: true,
      count: attempts.length,
      attempts,
    });
  } catch (error) {
    console.log(
      "❌ History Error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// =====================================================
// TODAY'S LEADERBOARD
// IMPORTANT:
// DAILY LIVE QUIZ LOGIC IS UNCHANGED
// =====================================================

router.get("/leaderboard", async (req, res) => {
  try {
    const today =
      new Date().toLocaleDateString(
        "en-CA",
        {
          timeZone: "Asia/Kolkata",
        }
      );

    console.log("TODAY:", today);

    const leaderboard =
      await QuizAttempt.find({
        date: today,
      })
        .populate("user", "name")
        .sort({
          percentage: -1,
          score: -1,
        })
        .limit(50);

    console.log(
      "LEADERBOARD DATA:",
      leaderboard
    );

    return res.json({
      success: true,
      leaderboard,
    });
  } catch (error) {
    console.log(
      "❌ Leaderboard Error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// =====================================================
// GET USER RANK
// IMPORTANT:
// DAILY LIVE QUIZ RANK LOGIC IS UNCHANGED
// =====================================================

router.get("/rank/:userId", async (req, res) => {
  try {
    const today =
      new Date().toLocaleDateString(
        "en-CA",
        {
          timeZone: "Asia/Kolkata",
        }
      );

    const leaderboard =
      await QuizAttempt.find({
        date: today,
      }).sort({
        percentage: -1,
        score: -1,
      });

    const index =
      leaderboard.findIndex(
        (item) =>
          item.user.toString() ===
          req.params.userId
      );

    // =================================================
    // USER NOT FOUND
    // =================================================

    if (index === -1) {
      return res.json({
        rank: null,
      });
    }

    // =================================================
    // USER RANK
    // =================================================

    return res.json({
      rank: index + 1,
      score:
        leaderboard[index].percentage,
    });
  } catch (error) {
    console.log(
      "❌ Rank Error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;