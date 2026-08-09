import express from "express";
import { loadCourseQuestions } from "../utils/questionLoader.js";

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

    if (quizType === "subject") {
      if (!courseId || !subjectId) {
        return res.status(400).json({
          success: false,
          message: "courseId and subjectId are required",
        });
      }

      // Directly load course JSON
      const courseQuestions =
        loadCourseQuestions(courseId);

      // Subject questions
      const questions = courseQuestions.filter(
        (question) =>
          question.subjectId === subjectId
      );

      // Randomize
      const shuffled = [...questions].sort(
        () => Math.random() - 0.5
      );

      // Maximum 30
      const selectedQuestions =
        shuffled.slice(0, 30);

      return res.status(200).json({
        success: true,
        courseId,
        subjectId,
        quizType: "subject",
        count: selectedQuestions.length,
        questions: selectedQuestions,
      });
    }

    return res.status(400).json({
      success: false,
      message:
        "Invalid request. Use quizType=subject.",
    });

  } catch (error) {
    console.error(
      "❌ Course JSON Question Error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;