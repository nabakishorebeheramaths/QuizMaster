import "dotenv/config";
import connectDB from "./config/db.js";
import Question from "./models/Question.js";

await connectDB();

console.log("================================");
console.log("STEP 9: COURSE QUESTION TEST");
console.log("================================");

const testCourses = [
  "btech",
  "gate",
  "class-10",
  "class-12",
  "artificial-intelligence",
  "ca"
];

for (const courseId of testCourses) {
  console.log(`\n🔎 Testing Course: ${courseId}`);

  const total = await Question.countDocuments({
    courseId
  });

  console.log("Available Questions:", total);

  const questions = await Question.aggregate([
    {
      $match: {
        courseId
      }
    },
    {
      $sample: {
        size: Math.min(30, total)
      }
    },
    {
      $project: {
        _id: 1,
        question: 1,
        courseId: 1,
        subjectId: 1,
        category: 1,
        difficulty: 1
      }
    }
  ]);

  console.log("Questions Selected:", questions.length);

  const wrongCourse = questions.filter(
    q => q.courseId !== courseId
  );

  console.log(
    "Wrong Course Questions:",
    wrongCourse.length
  );

  const subjectIds = [
    ...new Set(
      questions
        .map(q => q.subjectId)
        .filter(Boolean)
    )
  ];

  console.log(
    "Subject IDs:",
    subjectIds.join(", ")
  );

  if (wrongCourse.length === 0) {
    console.log("✅ COURSE FILTER: PASS");
  } else {
    console.log("❌ COURSE FILTER: FAIL");
  }

  if (questions.length === Math.min(30, total)) {
    console.log("✅ QUESTION COUNT: PASS");
  } else {
    console.log("❌ QUESTION COUNT: FAIL");
  }
}

console.log("\n================================");
console.log("STEP 9 CHECK COMPLETE");
console.log("================================");

process.exit(0);