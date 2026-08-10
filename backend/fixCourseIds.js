import "dotenv/config";
import connectDB from "./config/db.js";
import Question from "./models/Question.js";

await connectDB();

console.log("================================");
console.log("STEP 4: FIXING COURSE IDs");
console.log("================================");

const mappings = [
  {
    category: "ECE",
    courseId: "btech",
    subjectId: "ece-core",
  },
  {
    category: "Engineering Mathematics",
    courseId: "btech",
    subjectId: "engineering-mathematics",
  },
  {
    category: "Aptitude",
    courseId: "gate",
    subjectId: "aptitude",
  },
  {
    category: "Reasoning",
    courseId: "gate",
    subjectId: "reasoning",
  },
  {
    category: "GATE ECE",
    courseId: "gate",
    subjectId: "ece",
  },
];

let totalUpdated = 0;

for (const mapping of mappings) {
  const result = await Question.updateMany(
    {
      category: mapping.category,
      $or: [
        { courseId: null },
        { courseId: { $exists: false } },
      ],
    },
    {
      $set: {
        courseId: mapping.courseId,
        subjectId: mapping.subjectId,
      },
    }
  );

  console.log(
    `${mapping.category} → courseId: ${mapping.courseId} → updated: ${result.modifiedCount}`
  );

  totalUpdated += result.modifiedCount;
}

console.log("================================");
console.log("TOTAL UPDATED:", totalUpdated);
console.log("================================");

const total = await Question.countDocuments();

const courseQuestions = await Question.countDocuments({
  courseId: { $ne: null },
});

const noCourse = await Question.countDocuments({
  $or: [
    { courseId: null },
    { courseId: { $exists: false } },
  ],
});

console.log("TOTAL QUESTIONS:", total);
console.log("COURSE QUESTIONS:", courseQuestions);
console.log("NO COURSE ID:", noCourse);

console.log("================================");

process.exit(0);