import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Question from "./models/Question.js";

dotenv.config();

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correctAnswer: 1,
    category: "Current Affairs",
    difficulty: "Easy",
  },
  {
    question: "2 + 5 = ?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "Maths",
    difficulty: "Easy",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Newton",
      "Alexander Graham Bell",
      "Edison",
      "Tesla",
    ],
    correctAnswer: 1,
    category: "General Knowledge",
    difficulty: "Easy",
  },
];

const seed = async () => {
  try {
    await connectDB();

    await Question.deleteMany();

    await Question.insertMany(questions);

    console.log("✅ Questions inserted successfully");

    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
};

seed();