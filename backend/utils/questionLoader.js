import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =====================================================
// COURSE QUESTIONS FOLDER
// =====================================================

const dataPath = path.join(
  __dirname,
  "../data/courseQuestions"
);

// =====================================================
// LOAD QUESTIONS FOR ONE COURSE
// =====================================================

export const loadCourseQuestions = (courseId) => {
  try {
    const filePath = path.join(
      dataPath,
      `${courseId}.json`
    );

    if (!fs.existsSync(filePath)) {
      console.log(
        `❌ Question file not found: ${courseId}.json`
      );

      return [];
    }

    const data = fs.readFileSync(
      filePath,
      "utf-8"
    );

    const questions = JSON.parse(data);

    if (!Array.isArray(questions)) {
      console.log(
        `❌ Invalid question format: ${courseId}.json`
      );

      return [];
    }

    return questions;

  } catch (error) {
    console.error(
      `❌ Error loading ${courseId}.json:`,
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
    const files = fs
      .readdirSync(dataPath)
      .filter((file) =>
        file.endsWith(".json")
      );

    const allQuestions = [];

    for (const file of files) {
      try {
        const filePath = path.join(
          dataPath,
          file
        );

        const data = fs.readFileSync(
          filePath,
          "utf-8"
        );

        const questions = JSON.parse(data);

        if (Array.isArray(questions)) {
          allQuestions.push(...questions);
        }

      } catch (error) {
        console.error(
          `❌ Error reading ${file}:`,
          error.message
        );
      }
    }

    return allQuestions;

  } catch (error) {
    console.error(
      "❌ Error loading all course questions:",
      error.message
    );

    return [];
  }
};