import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

// Get daily random 30 questions
router.get("/", async (req, res) => {
  try {

    const questions = await Question.aggregate([
      {
        $sample: {
          size: 30
        }
      }
    ]);

    res.status(200).json({
      success: true,
      count: questions.length,
      questions
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
});

export default router;