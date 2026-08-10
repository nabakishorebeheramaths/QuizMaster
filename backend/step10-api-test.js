const BASE_URL = "http://localhost:5000";

const courses = [
  "btech",
  "gate",
  "class-10",
  "class-12",
  "artificial-intelligence",
  "ca"
];

async function testCourse(courseId) {
  console.log("\n================================");
  console.log(`TESTING COURSE: ${courseId}`);
  console.log("================================");

  try {
    const url =
      `${BASE_URL}/api/daily-quiz/today?courseId=${encodeURIComponent(courseId)}`;

    const response = await fetch(url);

    console.log("HTTP STATUS:", response.status);

    const data = await response.json();

    console.log("Success:", data.success);
    console.log("Date:", data.date);
    console.log("Status:", data.status);

    if (!data.questions) {
      console.log("❌ QUESTIONS ARRAY NOT FOUND");
      console.log("Response:", data);
      return;
    }

    console.log(
      "Questions Received:",
      data.questions.length
    );

    const wrongCourse = data.questions.filter(
      q => q.courseId !== courseId
    );

    console.log(
      "Wrong Course Questions:",
      wrongCourse.length
    );

    const subjects = [
      ...new Set(
        data.questions
          .map(q => q.subjectId)
          .filter(Boolean)
      )
    ];

    console.log(
      "Subjects:",
      subjects.join(", ")
    );

    if (wrongCourse.length === 0) {
      console.log("✅ COURSE FILTER: PASS");
    } else {
      console.log("❌ COURSE FILTER: FAIL");
    }

    if (
      data.questions.length === 30 ||
      (courseId === "ca" && data.questions.length === 29)
    ) {
      console.log("✅ QUESTION COUNT: PASS");
    } else {
      console.log("❌ QUESTION COUNT: FAIL");
    }

  } catch (error) {
    console.log("❌ API ERROR:");
    console.log(error.message);
  }
}

for (const courseId of courses) {
  await testCourse(courseId);
}

console.log("\n================================");
console.log("STEP 10 CHECK COMPLETE");
console.log("================================");
