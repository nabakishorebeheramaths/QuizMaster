import Question from "../models/Question.js";

// =====================================================
// ONLY SUPPORTED COURSE IDs
// =====================================================

const SUPPORTED_COURSES = new Set([
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
// LOAD QUESTIONS FOR ONE COURSE
// =====================================================

export const loadCourseQuestions = async (courseId) => {
  try {
    const normalizedCourseId = String(courseId || "")
      .trim()
      .toLowerCase();

    // Only Class 1-12 and B.Tech
    if (!SUPPORTED_COURSES.has(normalizedCourseId)) {
      console.log(
        `⚠️ Unsupported course ignored: ${normalizedCourseId}`
      );

      return [];
    }

    const questions = await Question.find({
      courseId: normalizedCourseId,
    }).lean();

    if (!questions.length) {
      console.log(
        `❌ No questions found in database for: ${normalizedCourseId}`
      );

      return [];
    }

    console.log(
      `✅ ${questions.length} questions loaded for ${normalizedCourseId}`
    );

    return questions;
  } catch (error) {
    console.error(
      `❌ Error loading questions for ${courseId}:`,
      error.message
    );

    return [];
  }
};

// =====================================================
// LOAD ALL SUPPORTED COURSE QUESTIONS
// =====================================================

export const loadAllCourseQuestions = async () => {
  try {
    const questions = await Question.find({
      courseId: {
        $in: Array.from(SUPPORTED_COURSES),
      },
    }).lean();

    console.log(
      `✅ Total Class 1-12 + B.Tech questions loaded: ${questions.length}`
    );

    return questions;
  } catch (error) {
    console.error(
      "❌ Error loading course questions:",
      error.message
    );

    return [];
  }
};