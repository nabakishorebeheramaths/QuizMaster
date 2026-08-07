import mongoose from "mongoose";

const dailyQuizSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    unique: true
  },

  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question"
  }],

  startTime: {
    type: Date
  },

  endTime: {
    type: Date
  }

}, {
  timestamps: true
});

export default mongoose.model("DailyQuiz", dailyQuizSchema);