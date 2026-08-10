
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

    // =====================================================
    // SUBJECT QUIZ
    // =====================================================

    if (quizType === "subject") {
      if (!courseId || !subjectId) {
        return res.status(400).json({
          success: false,
          message: "courseId and subjectId are required",
        });
      }

      // =====================================================
      // LOAD COURSE QUESTIONS
      // =====================================================

      const loadedQuestions =
        loadCourseQuestions(courseId);

      // IMPORTANT:
      // Make sure we always work with an array.
      // This prevents:
      // "courseQuestions.filter is not a function"
      const courseQuestions = Array.isArray(
        loadedQuestions
      )
        ? loadedQuestions
        : Array.isArray(loadedQuestions?.questions)
        ? loadedQuestions.questions
        : [];

      console.log(
        `📚 ${courseId}: ${courseQuestions.length} questions loaded`
      );

      // =====================================================
      // FILTER SUBJECT QUESTIONS
      // =====================================================

      const questions = courseQuestions.filter(
        (question) =>
          String(question.subjectId)
            .trim()
            .toLowerCase() ===
          String(subjectId)
            .trim()
            .toLowerCase()
      );

      console.log(
        `📖 ${courseId} / ${subjectId}: ${questions.length} questions found`
      );

      // =====================================================
      // RANDOMIZE
      // =====================================================

      const shuffled = [...questions].sort(
        () => Math.random() - 0.5
      );

      // =====================================================
      // MAXIMUM 30 QUESTIONS
      // =====================================================

      const selectedQuestions =
        shuffled.slice(0, 30);

      // =====================================================
      // RESPONSE
      // =====================================================

      return res.status(200).json({
        success: true,
        courseId,
        subjectId,
        quizType: "subject",
        count: selectedQuestions.length,
        questions: selectedQuestions,
      });
    }

    // =====================================================
    // INVALID REQUEST
    // =====================================================

    return res.status(400).json({
      success: false,
      message:
        "Invalid request. Use quizType=subject.",
    });

  } catch (error) {
    console.error(
      "❌ Question Route Error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to load course questions",
      error: error.message,
    });
  }
});

export default router;
