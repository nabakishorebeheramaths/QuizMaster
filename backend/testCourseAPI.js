import "dotenv/config";
import connectDB from "./config/db.js";
import Question from "./models/Question.js";

await connectDB();

console.log("================================");
console.log("STEP 7: COURSE QUESTION TEST");
console.log("================================");

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

console.log("\nCOURSE QUESTION COUNTS:");

for (const course of courses) {
  console.log(`${course._id} → ${course.count}`);
}

console.log("--------------------------------");

// Test every existing course
console.log("\nFILTER TEST:");

for (const course of courses) {
  const questions = await Question.find({
    courseId: course._id,
  })
    .select("_id question courseId subjectId category")
    .limit(5)
    .lean();

  const wrongCourse = questions.filter(
    (q) => q.courseId !== course._id
  );

  console.log(
    `${course._id} → returned ${questions.length} sample questions → ${
      wrongCourse.length === 0 ? "PASS ✅" : "FAIL ❌"
    }`
  );
}

console.log("--------------------------------");

console.log("CHECKING SUBJECT FILTER:");

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

for (const item of subjects) {
  const { courseId, subjectId } = item._id;

  const count = await Question.countDocuments({
    courseId,
    subjectId,
  });

  console.log(
    `${courseId} → ${subjectId} → ${count} questions → ${
      count === item.count ? "PASS ✅" : "FAIL ❌"
    }`
  );
}

console.log("================================");
console.log("STEP 7 CHECK COMPLETE");
console.log("================================");

process.exit(0);