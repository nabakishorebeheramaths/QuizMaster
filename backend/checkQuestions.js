import "dotenv/config";
import connectDB from "./config/db.js";
import Question from "./models/Question.js";

await connectDB();

const questions = await Question.find({
  courseId: null
}).select(
  "_id question category difficulty courseId courseName subjectId subject"
);

console.log("================================");
console.log("NO COURSE ID QUESTIONS:", questions.length);
console.log("================================");

questions.forEach((q, index) => {
  console.log(
    `${index + 1}.`,
    `[${q.category}]`,
    q.question
  );
});

process.exit(0);