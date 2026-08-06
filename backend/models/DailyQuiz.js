import mongoose from "mongoose";

const dailyQuizSchema = new mongoose.Schema({

    date: {
        type: String,
        required: true,
        unique: true
    },

    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question"
        }
    ],

    startTime: {
        type: String,
        default: "12:00 AM"
    },

    endTime: {
        type: String,
        default: "11:59 PM"
    }

}, {
    timestamps: true
});


const DailyQuiz = mongoose.model("DailyQuiz", dailyQuizSchema);

export default DailyQuiz;