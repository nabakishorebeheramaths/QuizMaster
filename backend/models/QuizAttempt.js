import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema(
  {
    // ============================================
    // USER
    // ============================================
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    userName: {
      type: String,
      required: true,
    },

    // ============================================
    // QUIZ DATE
    // ============================================
    date: {
      type: String,
      required: true,
    },

    // ============================================
    // SCORE
    // ============================================
    score: {
      type: Number,
      required: true,
    },

    totalQuestions: {
      type: Number,
      required: true,
    },

    percentage: {
      type: Number,
      required: true,
    },

    // ============================================
    // ANSWERS
    // Existing Live Quiz structure preserved
    // ============================================
    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
        },

        selectedAnswer: {
          type: Number,
        },

        correctAnswer: {
          type: Number,
        },
      },
    ],

    // ============================================
    // COURSE / SUBJECT SUPPORT
    // Optional fields
    // Live Quiz will continue working normally
    // ============================================
    courseId: {
      type: String,
      default: null,
    },

    courseName: {
      type: String,
      default: null,
    },

    subject: {
      type: String,
      default: null,
    },

    quizType: {
      type: String,
      enum: ["daily", "subject"],
      default: "daily",
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model(
  "QuizAttempt",
  quizAttemptSchema
);