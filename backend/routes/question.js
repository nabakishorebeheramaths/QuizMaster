import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

// =====================================================
// GET COURSE / SUBJECT QUESTIONS
// =====================================================

router.get("/", async (req, res) => {
  try {
    const {
      courseId,
      subjectId,
      quizType,
    } = req.query;

    // =================================================
    // SUBJECT QUIZ
    // =================================================

    if (quizType === "subject") {
      if (!courseId || !subjectId) {
        return res.status(400).json({
          success: false,
          message:
            "courseId and subjectId are required",
        });
      }

      const questions = await Question.aggregate([
        {
          $match: {
            courseId: courseId,
            subjectId: subjectId,
          },
        },
        {
          $sample: {
            size: 30,
          },
        },
      ]);

      return res.status(200).json({
        success: true,
        courseId,
        subjectId,
        quizType: "subject",
        count: questions.length,
        questions,
      });
    }

    // =================================================
    // INVALID REQUEST
    // =================================================

    return res.status(400).json({
      success: false,
      message:
        "Invalid request. Use quizType=subject.",
    });
  } catch (error) {
    console.error(
      "❌ Subject Question Error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;