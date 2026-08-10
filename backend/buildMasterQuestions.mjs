import fs from "fs";

const all = [];

const norm = (s) =>
  String(s || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

const add = (q, src) => {
  if (
    q &&
    typeof q.question === "string" &&
    q.question.trim() &&
    Array.isArray(q.options) &&
    q.options.length >= 2 &&
    Number.isInteger(q.correctAnswer) &&
    q.correctAnswer >= 0 &&
    q.correctAnswer < q.options.length
  ) {
    all.push({
      ...q,
      question: q.question.trim(),
      source: src,
    });
  }
};

// =====================================================
// 1. data/questions.json
// =====================================================

const main = JSON.parse(
  fs.readFileSync("./data/questions.json", "utf8")
);

if (Array.isArray(main)) {
  main.forEach((q) => add(q, "questions.json"));
}

// =====================================================
// 2. data/courseQuestions/*.json
// =====================================================

const courseDir = "./data/courseQuestions";

for (const file of fs.readdirSync(courseDir)) {
  if (!file.endsWith(".json")) continue;

  try {
    const data = JSON.parse(
      fs.readFileSync(`${courseDir}/${file}`, "utf8")
    );

    if (Array.isArray(data)) {
      data.forEach((q) =>
        add(q, `courseQuestions/${file}`)
      );
    } else if (Array.isArray(data.questions)) {
      data.questions.forEach((q) =>
        add(q, `courseQuestions/${file}`)
      );
    } else if (Array.isArray(data.data)) {
      data.data.forEach((q) =>
        add(q, `courseQuestions/${file}`)
      );
    }
  } catch (err) {
    console.log("Skipped JSON:", file);
  }
}

// =====================================================
// 3. Parse JavaScript question files
// =====================================================

function parseJSQuestions(filePath, source, defaultCategory) {
  const content = fs.readFileSync(filePath, "utf8");

  /*
    Matches:

    question: "....",
    options: ["...", "...", "...", "..."],
    correctAnswer: 1

    Also handles single quotes for question/options.
  */

  const regex =
    /question\s*:\s*(['"])(.*?)\1\s*,[\s\S]*?options\s*:\s*\[([\s\S]*?)\]\s*,[\s\S]*?correctAnswer\s*:\s*(\d+)/g;

  let count = 0;

  for (const match of content.matchAll(regex)) {
    const question = match[2];

    const options = [];

    const optionRegex =
      /(['"])(.*?)\1/g;

    for (const optionMatch of match[3].matchAll(optionRegex)) {
      options.push(optionMatch[2]);
    }

    const correctAnswer = Number(match[4]);

    add(
      {
        question,
        options,
        correctAnswer,
        category: defaultCategory,
        difficulty: "Medium",
      },
      source
    );

    count++;
  }

  console.log(`${source} PARSED: ${count}`);
}

// =====================================================
// 4. seedQuestions.js
// =====================================================

parseJSQuestions(
  "./seedQuestions.js",
  "seedQuestions.js",
  "General"
);

// =====================================================
// 5. seedSubjectQuestions.js
// =====================================================

parseJSQuestions(
  "./seedSubjectQuestions.js",
  "seedSubjectQuestions.js",
  "Subject"
);

// =====================================================
// 6. Remove duplicate questions
// =====================================================

const unique = new Map();

for (const q of all) {
  const key = norm(q.question);

  if (!unique.has(key)) {
    const clean = { ...q };

    delete clean.source;

    unique.set(key, clean);
  }
}

const result = [...unique.values()];

// =====================================================
// 7. Create masterQuestions.json
// =====================================================

fs.writeFileSync(
  "./masterQuestions.json",
  JSON.stringify(result, null, 2),
  "utf8"
);

// =====================================================
// 8. Final report
// =====================================================

console.log("================================");
console.log("RAW VALID QUESTIONS:", all.length);
console.log("UNIQUE QUESTIONS:", result.length);
console.log("DUPLICATES REMOVED:", all.length - result.length);
console.log("================================");
console.log("Created: masterQuestions.json");