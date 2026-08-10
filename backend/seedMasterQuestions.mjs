import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import Question from "./models/Question.js";
import DailyQuiz from "./models/DailyQuiz.js";

dotenv.config();

try {
  // Connect MongoDB
  await mongoose.connect(
    process.env.MONGO_URI || process.env.MONGODB_URI
  );

  console.log("🍃 MongoDB Connected Successfully");

  // Load master questions
  const questions = JSON.parse(
    fs.readFileSync("./masterQuestions.json", "utf8")
  );

  console.log("MASTER QUESTIONS:", questions.length);

  // Safety check
  if (!Array.isArray(questions) || questions.length === 0) {
    throw new Error("masterQuestions.json is empty or invalid");
  }

  // Delete old data
  const deletedQuestions = await Question.deleteMany({});
  const deletedDailyQuiz = await DailyQuiz.deleteMany({});

  console.log(
    "Old Questions Deleted:",
    deletedQuestions.deletedCount
  );

  console.log(
    "Old DailyQuiz Deleted:",
    deletedDailyQuiz.deletedCount
  );

  // Insert fresh questions
  const inserted = await Question.insertMany(questions, {
    ordered: false,
  });

  console.log("================================");
  console.log("FRESH QUESTIONS INSERTED:", inserted.length);

  // Final verification
  const finalQuestions = await Question.countDocuments();
  const finalDailyQuiz = await DailyQuiz.countDocuments();

  console.log("QUESTIONS IN MONGODB:", finalQuestions);
  console.log("DAILY QUIZZES IN MONGODB:", finalDailyQuiz);
  console.log("================================");

  await mongoose.disconnect();

  console.log("✅ CLEAN SEED COMPLETED");
  process.exit(0);
} catch (error) {
  console.error("❌ SEED ERROR:", error);

  await mongoose.disconnect().catch(() => {});

  process.exit(1);
}