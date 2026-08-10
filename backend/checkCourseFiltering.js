import "dotenv/config";
import connectDB from "./config/db.js";
import Question from "./models/Question.js";

await connectDB();

console.log("================================");
console.log("STEP 6: COURSE FILTERING CHECK");
console.log("================================");

const total = await Question.countDocuments();

console.log("TOTAL QUESTIONS:", total);
console.log("--------------------------------");

// Get all existing course IDs WITHOUT changing anything
const courses = await Question.distinct("courseId");

console.log("EXISTING COURSE IDs:");
console.log(courses);
console.log("--------------------------------");

// Check every course separately
for (const courseId of courses) {
  const count = await Question.countDocuments({
    courseId: courseId,
  });

  console.log(`${courseId} → ${count} questions`);
}

console.log("--------------------------------");

// Check subjects inside every course
const combinations = await Question.aggregate([
  {
    $group: {
      _id: {
        courseId: "$courseId",
        subjectId: "$subjectId",
      },
      count: { $sum: 1 },
    },
  },
  {
    $sort: {
      "_id.courseId": 1,
      "_id.subjectId": 1,
    },
  },
]);

console.log("COURSE → SUBJECT:");

for (const item of combinations) {
  console.log(
    `${item._id.courseId} → ${item._id.subjectId} → ${item.count}`
  );
}

console.log("--------------------------------");

// Verify that no question has missing IDs
const missingCourse = await Question.countDocuments({
  $or: [
    { courseId: null },
    { courseId: { $exists: false } },
  ],
});

const missingSubject = await Question.countDocuments({
  $or: [
    { subjectId: null },
    { subjectId: { $exists: false } },
  ],
});

console.log("MISSING COURSE ID:", missingCourse);
console.log("MISSING SUBJECT ID:", missingSubject);

console.log("================================");
console.log("STEP 6 CHECK COMPLETE");
console.log("================================");

process.exit(0);