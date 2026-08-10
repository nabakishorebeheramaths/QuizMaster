import "dotenv/config";
import connectDB from "./config/db.js";
import Question from "./models/Question.js";

await connectDB();

console.log("================================");
console.log("STEP 5: COURSE DISTRIBUTION");
console.log("================================");

const total = await Question.countDocuments();

console.log("TOTAL QUESTIONS:", total);
console.log("--------------------------------");

const courses = await Question.aggregate([
  {
    $group: {
      _id: "$courseId",
      count: { $sum: 1 },
    },
  },
  {
    $sort: { count: -1 },
  },
]);

console.log("\nCOURSE DISTRIBUTION:");

for (const course of courses) {
  console.log(
    `${course._id || "NO COURSE"} → ${course.count}`
  );
}

console.log("--------------------------------");

const subjects = await Question.aggregate([
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
      count: -1,
    },
  },
]);

console.log("\nSUBJECT DISTRIBUTION:");

for (const subject of subjects) {
  console.log(
    `${subject._id.courseId || "NO COURSE"} → ${
      subject._id.subjectId || "NO SUBJECT"
    } → ${subject.count}`
  );
}

console.log("--------------------------------");

const missingSubject = await Question.countDocuments({
  $or: [
    { subjectId: null },
    { subjectId: { $exists: false } },
  ],
});

console.log("QUESTIONS WITHOUT SUBJECT ID:", missingSubject);

console.log("--------------------------------");

const missingCourseName = await Question.countDocuments({
  $or: [
    { courseName: null },
    { courseName: { $exists: false } },
  ],
});

console.log("QUESTIONS WITHOUT COURSE NAME:", missingCourseName);

console.log("================================");
console.log("STEP 5 CHECK COMPLETE");
console.log("================================");

process.exit(0);