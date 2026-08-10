import connectDB from "./config/db.js";
import Question from "./models/Question.js";
import DailyQuiz from "./models/DailyQuiz.js";

await connectDB();

console.log("QUESTIONS:", await Question.countDocuments());
console.log("DAILY QUIZZES:", await DailyQuiz.countDocuments());

const withoutCourse = await Question.countDocuments({
  $or: [
    { courseId: null },
    { courseId: { $exists: false } }
  ]
});

const withoutSubject = await Question.countDocuments({
  $or: [
    { subjectId: null },
    { subjectId: { $exists: false } }
  ]
});

console.log("WITHOUT COURSE:", withoutCourse);
console.log("WITHOUT SUBJECT:", withoutSubject);

process.exit(0);
