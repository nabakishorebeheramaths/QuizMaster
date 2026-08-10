import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

// =====================================================
// CLASS 1-12 + B.TECH
// DO NOT CHANGE THIS LOGIC
// =====================================================

const supportedCourses = new Set([
  "class-1",
  "class-2",
  "class-3",
  "class-4",
  "class-5",
  "class-6",
  "class-7",
  "class-8",
  "class-9",
  "class-10",
  "class-11",
  "class-12",
  "btech",
]);

// =====================================================
// SUBJECT ALIASES
// =====================================================

const subjectAliases = {
  math: "maths",
  mathematics: "maths",
  maths: "maths",

  evs: "evs",
  "environmental-science": "evs",

  science: "science",

  english: "english",

  "social-science": "social-science",
  socialscience: "social-science",
  ss: "social-science",

  gk: "gk",
  "general-knowledge": "gk",

  "computer-networks": "computer-networks",
};

// =====================================================
// NORMALIZE SUBJECT
// =====================================================

const normalizeSubjectId = (subjectId) => {
  const value = String(subjectId || "")
    .trim()
    .toLowerCase();

  return subjectAliases[value] || value;
};

// =====================================================
// ESCAPE REGEX
// =====================================================

const escapeRegex = (value) => {
  return String(value).replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
};

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
    // VALIDATION
    // =================================================

    if (quizType !== "subject") {
      return res.status(400).json({
        success: false,
        message:
          "Invalid request. Use quizType=subject.",
      });
    }

    if (!courseId || !subjectId) {
      return res.status(400).json({
        success: false,
        message:
          "courseId and subjectId are required",
      });
    }

    // =================================================
    // NORMALIZE COURSE
    // =================================================

    const normalizedCourseId = String(courseId)
      .trim()
      .toLowerCase();

    // =================================================
    // NORMALIZE SUBJECT
    // =================================================

    const normalizedSubjectId =
      normalizeSubjectId(subjectId);

    // =================================================
    // LOG REQUEST
    // =================================================

    console.log(
      `🔎 Loading questions: ${normalizedCourseId} / ${normalizedSubjectId}`
    );

    // =================================================
    // CLASS 1-12 + B.TECH
    // =================================================
    // IMPORTANT:
    // EXISTING LOGIC IS PRESERVED.
    // =================================================

    if (supportedCourses.has(normalizedCourseId)) {
      let questions = await Question.find({
        courseId: normalizedCourseId,
        subjectId: normalizedSubjectId,
      }).lean();

      // -----------------------------------------------
      // CASE-INSENSITIVE FALLBACK
      // -----------------------------------------------

      if (questions.length === 0) {
        questions = await Question.find({
          courseId: {
            $regex: `^${escapeRegex(
              normalizedCourseId
            )}$`,
            $options: "i",
          },

          subjectId: {
            $regex: `^${escapeRegex(
              normalizedSubjectId
            )}$`,
            $options: "i",
          },
        }).lean();
      }

      console.log(
        `📖 ${normalizedCourseId} / ${normalizedSubjectId}: ${questions.length} questions found`
      );

      // -----------------------------------------------
      // RANDOMIZE
      // -----------------------------------------------

      const shuffled = [...questions].sort(
        () => Math.random() - 0.5
      );

      // -----------------------------------------------
      // MAX 30
      // -----------------------------------------------

      const selectedQuestions =
        shuffled.slice(0, 30);

      console.log(
        `📚 ${normalizedCourseId}: ${selectedQuestions.length} questions loaded`
      );

      return res.status(200).json({
        success: true,
        courseId: normalizedCourseId,
        subjectId: normalizedSubjectId,
        quizType: "subject",
        count: selectedQuestions.length,
        questions: selectedQuestions,
      });
    }

    // =================================================
    // OTHER COURSES
    // =================================================
    // JEE / NEET / NURSING / COMMERCE / ARTS /
    // ENGINEERING BRANCHES / ETC.
    //
    // DO NOT BLOCK THEM.
    // LOAD DIRECTLY FROM MONGODB.
    // =================================================

    console.log(
      `🌐 Loading additional course: ${normalizedCourseId}`
    );

    let questions = await Question.find({
      courseId: normalizedCourseId,
      subjectId: normalizedSubjectId,
    }).lean();

    // =================================================
    // CASE-INSENSITIVE FALLBACK
    // =================================================

    if (questions.length === 0) {
      questions = await Question.find({
        courseId: {
          $regex: `^${escapeRegex(
            normalizedCourseId
          )}$`,
          $options: "i",
        },

        subjectId: {
          $regex: `^${escapeRegex(
            normalizedSubjectId
          )}$`,
          $options: "i",
        },
      }).lean();
    }

    // =================================================
    // LOG
    // =================================================

    console.log(
      `📖 ${normalizedCourseId} / ${normalizedSubjectId}: ${questions.length} questions found`
    );

    // =================================================
    // RANDOMIZE
    // =================================================

    const shuffled = [...questions].sort(
      () => Math.random() - 0.5
    );

    // =================================================
    // MAXIMUM 30
    // =================================================

    const selectedQuestions =
      shuffled.slice(0, 30);

    console.log(
      `📚 ${normalizedCourseId}: ${selectedQuestions.length} questions loaded`
    );

    // =================================================
    // RESPONSE
    // =================================================

    return res.status(200).json({
      success: true,
      courseId: normalizedCourseId,
      subjectId: normalizedSubjectId,
      quizType: "subject",
      count: selectedQuestions.length,
      questions: selectedQuestions,
    });

  } catch (error) {
    // =================================================
    // ERROR
    // =================================================

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