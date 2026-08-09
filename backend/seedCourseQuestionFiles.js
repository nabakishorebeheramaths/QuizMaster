import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import Question from "./models/Question.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const questionsFolder = path.join(
  __dirname,
  "data",
  "courseQuestions"
);

const loadCourseQuestions = async () => {
  try {
    // ==========================================
    // CONNECT MONGODB
    // ==========================================

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    // ==========================================
    // READ ALL JSON FILES
    // ==========================================

    const files = fs
      .readdirSync(questionsFolder)
      .filter((file) => file.endsWith(".json"));

    console.log(
      `📂 Found ${files.length} JSON course files`
    );

    // ==========================================
    // LOAD QUESTIONS
    // ==========================================

    let allQuestions = [];

    for (const file of files) {
      const filePath = path.join(
        questionsFolder,
        file
      );

      const fileData = fs.readFileSync(
        filePath,
        "utf-8"
      );

      const questions = JSON.parse(fileData);

      if (!Array.isArray(questions)) {
        console.log(
          `⚠️ Skipping ${file} - not an array`
        );
        continue;
      }

      console.log(
        `📚 ${file} → ${questions.length} questions`
      );

      allQuestions.push(...questions);
    }

    console.log(
      `\n📝 Total JSON questions: ${allQuestions.length}`
    );

    // ==========================================
    // VALIDATION
    // ==========================================

    const invalidQuestions =
      allQuestions.filter(
        (q) =>
          !q.courseId ||
          !q.subjectId ||
          !q.question ||
          !Array.isArray(q.options) ||
          q.options.length !== 4 ||
          q.correctAnswer === undefined ||
          q.correctAnswer < 0 ||
          q.correctAnswer > 3
      );

    if (invalidQuestions.length > 0) {
      console.log(
        `❌ Found ${invalidQuestions.length} invalid questions`
      );

      invalidQuestions
        .slice(0, 10)
        .forEach((q, index) => {
          console.log(
            `❌ Invalid Question ${index + 1}:`
          );
          console.log(q);
        });

      await mongoose.disconnect();

      process.exit(1);
    }

    // ==========================================
    // INSERT INTO MONGODB
    // ==========================================

    console.log(
      "\n📥 Inserting questions into MongoDB..."
    );

    await Question.insertMany(allQuestions);

    console.log(
      `\n🎉 ${allQuestions.length} questions inserted successfully!`
    );

    // ==========================================
    // DISCONNECT
    // ==========================================

    await mongoose.disconnect();

    console.log(
      "✅ MongoDB connection closed"
    );

    process.exit(0);

  } catch (error) {
    console.error(
      "\n❌ Error:",
      error.message
    );

    try {
      await mongoose.disconnect();
    } catch (disconnectError) {
      console.error(
        "❌ Disconnect Error:",
        disconnectError.message
      );
    }

    process.exit(1);
  }
};

loadCourseQuestions();