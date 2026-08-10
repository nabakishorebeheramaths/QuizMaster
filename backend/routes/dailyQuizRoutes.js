console.log("🔥 DAILY QUIZ ROUTE LOADED");

import express from "express";
import DailyQuiz from "../models/DailyQuiz.js";
import DailyQuestion from "../models/DailyQuestion.js";

const router = express.Router();

router.get("/today", async (req, res) => {
  try {
    const today = new Date().toLocaleDateString("en-CA", {
      timeZone: "Asia/Kolkata",
    });

    console.log("📅 TODAY:", today);

    // ==========================================
    // CHECK TODAY'S QUIZ
    // ==========================================
    let quiz = await DailyQuiz.findOne({
      date: today,
    }).populate("questions");

    if (quiz) {
      console.log("✅ Today's Daily Quiz already exists");

      return res.json({
        success: true,
        date: today,
        status: "LIVE",
        questions: quiz.questions,
        startTime: quiz.startTime,
        endTime: quiz.endTime,
      });
    }

    // ==========================================
    // GET TOTAL DAILY QUESTIONS
    // ==========================================
    const totalQuestions = await DailyQuestion.countDocuments();

    console.log("📚 Total Daily Questions:", totalQuestions);

    // ==========================================
    // NO QUESTIONS AVAILABLE
    // ==========================================
    if (totalQuestions === 0) {
      return res.status(200).json({
        success: true,
        date: today,
        status: "NOT_AVAILABLE",
        questions: [],
        message:
          "Questions are not present at the moment. We are adding questions. Please check again soon.",
      });
    }

    // ==========================================
    // GET ALL PREVIOUS DAILY QUIZZES
    // ==========================================
    const previousQuizzes = await DailyQuiz.find(
      {},
      { questions: 1 }
    ).lean();

    const usedQuestionIds = new Set();

    previousQuizzes.forEach((dailyQuiz) => {
      if (dailyQuiz.questions) {
        dailyQuiz.questions.forEach((questionId) => {
          usedQuestionIds.add(questionId.toString());
        });
      }
    });

    console.log(
      "🔄 Questions used in current cycle:",
      usedQuestionIds.size
    );

    // ==========================================
    // GET UNUSED QUESTIONS
    // ==========================================
    const unusedQuestions = await DailyQuestion.find({
      _id: {
        $nin: Array.from(usedQuestionIds),
      },
    }).select("_id");

    console.log(
      "🆕 Unused questions:",
      unusedQuestions.length
    );

    let selectedQuestions = [];

    // ==========================================
    // CURRENT CYCLE HAS QUESTIONS
    // ==========================================
    if (unusedQuestions.length > 0) {
      const shuffled = [...unusedQuestions].sort(
        () => Math.random() - 0.5
      );

      /*
       * IMPORTANT:
       *
       * If less than 30 questions remain,
       * use ALL remaining questions.
       *
       * Example:
       * 461 total
       * 450 used
       * 11 remaining
       *
       * Day 16 = 11 questions
       */
      const questionsForToday = Math.min(
        30,
        unusedQuestions.length
      );

      selectedQuestions = shuffled
        .slice(0, questionsForToday)
        .map((question) => question._id);

      console.log(
        `🎯 Selected ${selectedQuestions.length} new questions`
      );
    }

    // ==========================================
    // CURRENT CYCLE FINISHED
    // START NEW CYCLE
    // ==========================================
    if (selectedQuestions.length === 0) {
      console.log("🔄 CURRENT CYCLE COMPLETED");
      console.log("🚀 STARTING NEW QUESTION CYCLE");

      const allQuestions = await DailyQuestion.find(
        {}
      ).select("_id");

      const shuffled = [...allQuestions].sort(
        () => Math.random() - 0.5
      );

      const questionsForToday = Math.min(
        30,
        allQuestions.length
      );

      selectedQuestions = shuffled
        .slice(0, questionsForToday)
        .map((question) => question._id);

      console.log(
        `🆕 New cycle started with ${selectedQuestions.length} questions`
      );
    }

    // ==========================================
    // SAFETY CHECK
    // ==========================================
    if (selectedQuestions.length === 0) {
      return res.status(200).json({
        success: true,
        date: today,
        status: "NOT_AVAILABLE",
        questions: [],
        message:
          "Questions are not present at the moment. We are adding questions. Please check again soon.",
      });
    }

    // ==========================================
    // CREATE TODAY'S QUIZ
    // ==========================================
    await DailyQuiz.create({
      date: today,
      questions: selectedQuestions,
      startTime: new Date(),
      endTime: new Date(
        Date.now() + 24 * 60 * 60 * 1000
      ),
    });

    // ==========================================
    // FETCH CREATED QUIZ
    // ==========================================
    quiz = await DailyQuiz.findOne({
      date: today,
    }).populate("questions");

    console.log("✅ TODAY'S QUIZ CREATED");
    console.log(
      "📝 QUESTIONS:",
      quiz.questions.length
    );

    return res.json({
      success: true,
      date: today,
      status: "LIVE",
      questions: quiz.questions,
      startTime: quiz.startTime,
      endTime: quiz.endTime,
    });
  } catch (error) {
    console.error("❌ DAILY QUIZ ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;