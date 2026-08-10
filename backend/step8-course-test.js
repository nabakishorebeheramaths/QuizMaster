import "dotenv/config";
import connectDB from "./config/db.js";
import Question from "./models/Question.js";

await connectDB();

console.log("================================");
console.log("STEP 8: COURSE-WISE QUESTION TEST");
console.log("================================");

const courses = await Question.aggregate([
  {
    $match: {
      courseId: { $ne: null },
      subjectId: { $ne: null }
    }
  },
  {
    $group: {
      _id: "$courseId",
      courseName: { $first: "$courseName" },
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
]);

console.log("\nTOTAL COURSES:", courses.length);

console.log("\nCOURSE DISTRIBUTION:");

courses.forEach((course, index) => {
  console.log(
    `${index + 1}. ${course._id} -> ${course.count} questions`
  );
});

console.log("\n================================");
console.log("STEP 8 CHECK COMPLETE");
console.log("================================");

process.exit(0);