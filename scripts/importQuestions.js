import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import Question from "../models/Question.js";
import connectDB from "../config/db.js";

dotenv.config();

const importQuestions = async () => {
  try {

    await connectDB();

    const questions = JSON.parse(
      fs.readFileSync("./data/questions.json", "utf-8")
    );

    await Question.deleteMany();

    await Question.insertMany(questions);

    console.log("✅ Questions Imported Successfully");

    process.exit();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importQuestions();