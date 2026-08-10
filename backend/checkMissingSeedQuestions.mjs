import fs from "fs";

function countQuestions(file) {
  const content = fs.readFileSync(file, "utf8");

  const regex =
    /question\s*:\s*(['"])(.*?)\1\s*,[\s\S]*?options\s*:\s*\[([\s\S]*?)\]\s*,[\s\S]*?correctAnswer\s*:\s*(\d+)/g;

  const questions = [];

  for (const match of content.matchAll(regex)) {
    questions.push({
      question: match[2],
      options: [...match[3].matchAll(/(['"])(.*?)\1/g)]
        .map((m) => m[2]),
      correctAnswer: Number(match[4]),
    });
  }

  return questions;
}

function countQuestionProperties(file) {
  const content = fs.readFileSync(file, "utf8");

  return (content.match(/^\s*question\s*:/gm) || []).length;
}

console.log("================================");
console.log("CHECKING SEED FILES");
console.log("================================");

const seed1 = countQuestions("./seedQuestions.js");
const seed1Expected = countQuestionProperties("./seedQuestions.js");

console.log(
  "seedQuestions.js:"
);
console.log(
  "  question properties:",
  seed1Expected
);
console.log(
  "  parser found:",
  seed1.length
);
console.log(
  "  missing:",
  seed1Expected - seed1.length
);

console.log("--------------------------------");

const seed2 = countQuestions("./seedSubjectQuestions.js");
const seed2Expected =
  countQuestionProperties("./seedSubjectQuestions.js");

console.log(
  "seedSubjectQuestions.js:"
);
console.log(
  "  question properties:",
  seed2Expected
);
console.log(
  "  parser found:",
  seed2.length
);
console.log(
  "  missing:",
  seed2Expected - seed2.length
);

console.log("================================");