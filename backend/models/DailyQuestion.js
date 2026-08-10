import mongoose from "mongoose";

const dailyQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },

    options: [
      {
        type: String,
        required: true,
      },
    ],

    correctAnswer: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      default: "General Knowledge",
    },

    difficulty: {
      type: String,
      default: "Medium",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("DailyQuestion", dailyQuestionSchema);