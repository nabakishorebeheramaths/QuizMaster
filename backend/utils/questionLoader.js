
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =====================================================
// PATHS
// =====================================================

const courseQuestionsPath = path.join(
  __dirname,
  "../data/courseQuestions"
);

const masterQuestionsPath = path.join(
  __dirname,
  "../masterQuestions.json"
);

const questionsPath = path.join(
  __dirname,
  "../data/questions.json"
);

// =====================================================
// ONLY SUPPORTED COURSES FOR THIS LOADER
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
// READ JSON FILE SAFELY
// =====================================================

const readJsonFile = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const data = fs.readFileSync(filePath, "utf-8");

    if (!data.trim()) {
      return null;
    }

    const parsed = JSON.parse(data);

    return Array.isArray(parsed) ? parsed : null;
  } catch (error) {
    console.error(
      `❌ Error reading JSON file ${filePath}:`,
      error.message
    );

    return null;
  }
};

// =====================================================
// GET MASTER QUESTIONS
// =====================================================

const getMasterQuestions = () => {
  // First preference: masterQuestions.json
  let questions = readJsonFile(masterQuestionsPath);

  if (questions && questions.length > 0) {
    return questions;
  }

  // Second preference: data/questions.json
  questions = readJsonFile(questionsPath);

  if (questions && questions.length > 0) {
    return questions;
  }

  console.log("❌ No master question database found.");

  return [];
};

// =====================================================
// CHECK WHETHER QUESTION BELONGS TO COURSE
// =====================================================

const matchesCourse = (question, courseId) => {
  if (!question || !courseId) {
    return false;
  }

  const normalizedCourseId = String(courseId)
    .trim()
    .toLowerCase();

  // ---------------------------------------------------
  // Collect all possible course fields
  // ---------------------------------------------------

  const courseValues = [
    question.courseId,
    question.course,
    question.classId,
    question.class,
    question.educationLevel,
  ]
    .filter(
      (value) =>
        value !== undefined &&
        value !== null &&
        value !== ""
    )
    .map((value) =>
      String(value).trim().toLowerCase()
    );

  // Direct course match
  if (courseValues.includes(normalizedCourseId)) {
    return true;
  }

  // ---------------------------------------------------
  // CLASS 1 - CLASS 12
  // ---------------------------------------------------

  if (normalizedCourseId.startsWith("class-")) {
    const classNumber =
      normalizedCourseId.replace("class-", "");

    const possibleClassValues = [
      `class-${classNumber}`,
      `class ${classNumber}`,
      `class${classNumber}`,
      classNumber,
    ];

    if (
      courseValues.some((value) =>
        possibleClassValues.includes(value)
      )
    ) {
      return true;
    }

    // Check common alternative fields
    const textValues = [
      question.className,
      question.grade,
      question.standard,
      question.level,
    ]
      .filter(
        (value) =>
          value !== undefined &&
          value !== null
      )
      .map((value) =>
        String(value).trim().toLowerCase()
      );

    if (
      textValues.some((value) =>
        possibleClassValues.includes(value)
      )
    ) {
      return true;
    }
  }

  // ---------------------------------------------------
  // B.TECH
  // ---------------------------------------------------

  if (normalizedCourseId === "btech") {
    const btechValues = [
      "btech",
      "b.tech",
      "b.tech.",
      "be",
      "b.e",
      "b.e.",
      "engineering",
      "engineering & technology",
    ];

    if (
      courseValues.some((value) =>
        btechValues.includes(value)
      )
    ) {
      return true;
    }

    const textValues = [
      question.courseName,
      question.degree,
      question.program,
      question.branch,
      question.category,
    ]
      .filter(
        (value) =>
          value !== undefined &&
          value !== null
      )
      .map((value) =>
        String(value).trim().toLowerCase()
      );

    if (
      textValues.some((value) =>
        btechValues.includes(value)
      )
    ) {
      return true;
    }
  }

  return false;
};

// =====================================================
// NORMALIZE QUESTION
// =====================================================

const normalizeQuestion = (question, courseId) => {
  if (!question || typeof question !== "object") {
    return null;
  }

  return {
    ...question,

    courseId:
      question.courseId ||
      question.course ||
      courseId,

    courseName:
      question.courseName ||
      question.course ||
      courseId,

    subjectId:
      question.subjectId ||
      question.subject ||
      "general",

    subjectName:
      question.subjectName ||
      question.subject ||
      "General",
  };
};

// =====================================================
// LOAD QUESTIONS FOR ONE COURSE
// =====================================================

export const loadCourseQuestions = (courseId) => {
  try {
    if (!courseId) {
      console.log(
        "❌ Course ID is required."
      );

      return [];
    }

    const normalizedCourseId = String(courseId)
      .trim()
      .toLowerCase();

    // =================================================
    // ONLY CLASS 1-12 + B.TECH
    // =================================================

    if (!supportedCourses.has(normalizedCourseId)) {
      console.log(
        `⚠️ Course loader currently supports only Class 1-12 and B.Tech: ${normalizedCourseId}`
      );

      return [];
    }

    // =================================================
    // FIRST: CHECK INDIVIDUAL COURSE JSON
    // =================================================

    const filePath = path.join(
      courseQuestionsPath,
      `${normalizedCourseId}.json`
    );

    const courseFileQuestions =
      readJsonFile(filePath);

    if (
      courseFileQuestions &&
      courseFileQuestions.length > 0
    ) {
      console.log(
        `✅ Loaded ${courseFileQuestions.length} questions from ${normalizedCourseId}.json`
      );

      return courseFileQuestions;
    }

    // =================================================
    // FALLBACK: MASTER QUESTIONS
    // =================================================

    console.log(
      `ℹ️ ${normalizedCourseId}.json not found. Checking master question database...`
    );

    const masterQuestions =
      getMasterQuestions();

    if (!masterQuestions.length) {
      console.log(
        `❌ No questions available for ${normalizedCourseId}`
      );

      return [];
    }

    // =================================================
    // FILTER BY COURSE
    // =================================================

    const matchedQuestions =
      masterQuestions
        .filter((question) =>
          matchesCourse(
            question,
            normalizedCourseId
          )
        )
        .map((question) =>
          normalizeQuestion(
            question,
            normalizedCourseId
          )
        )
        .filter(Boolean);

    console.log(
      `📚 ${normalizedCourseId}: ${matchedQuestions.length} matching questions found`
    );

    return matchedQuestions;
  } catch (error) {
    console.error(
      `❌ Error loading ${courseId}:`,
      error.message
    );

    return [];
  }
};

// =====================================================
// LOAD ALL COURSE QUESTIONS
// =====================================================

export const loadAllCourseQuestions = () => {
  try {
    const allQuestions = [];

    // =================================================
    // FIRST: LOAD COURSE JSON FILES IF AVAILABLE
    // =================================================

    if (fs.existsSync(courseQuestionsPath)) {
      const files = fs
        .readdirSync(courseQuestionsPath)
        .filter((file) =>
          file.endsWith(".json")
        );

      for (const file of files) {
        try {
          const filePath = path.join(
            courseQuestionsPath,
            file
          );

          const questions =
            readJsonFile(filePath);

          if (
            questions &&
            questions.length > 0
          ) {
            allQuestions.push(
              ...questions
            );
          }
        } catch (error) {
          console.error(
            `❌ Error reading ${file}:`,
            error.message
          );
        }
      }
    }

    // =================================================
    // IF COURSE FILES ARE EMPTY,
    // LOAD MASTER QUESTIONS
    // =================================================

    if (allQuestions.length === 0) {
      const masterQuestions =
        getMasterQuestions();

      if (masterQuestions.length > 0) {
        allQuestions.push(
          ...masterQuestions
        );
      }
    }

    // =================================================
    // REMOVE DUPLICATES
    // =================================================

    const uniqueQuestions = [];
    const seen = new Set();

    for (const question of allQuestions) {
      const key =
        question._id ||
        question.id ||
        `${question.question || ""}-${question.courseId || question.course || ""}`;

      if (!seen.has(key)) {
        seen.add(key);
        uniqueQuestions.push(question);
      }
    }

    console.log(
      `📚 Total course questions loaded: ${uniqueQuestions.length}`
    );

    return uniqueQuestions;
  } catch (error) {
    console.error(
      "❌ Error loading all course questions:",
      error.message
    );

    return [];
  }
};
