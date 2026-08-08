import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
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

    // ==========================================
    // COURSE INFORMATION
    // ==========================================

    courseId: {
      type: String,
      default: null,
      index: true,
    },

    courseName: {
      type: String,
      default: null,
    },

    subjectId: {
      type: String,
      default: null,
      index: true,
    },

    subject: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Question", questionSchema);