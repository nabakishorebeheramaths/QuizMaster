import fs from "fs";

function findMissing(file) {
  const content = fs.readFileSync(file, "utf8");

  const lines = content.split(/\r?\n/);

  let found = 0;
  let i = 0;

  while (i < lines.length) {
    if (/^\s*question\s*:/.test(lines[i])) {
      found++;

      const block = lines
        .slice(i, Math.min(i + 15, lines.length))
        .join("\n");

      if (
        !/options\s*:\s*\[/.test(block) ||
        !/correctAnswer\s*:\s*\d+/.test(block)
      ) {
        console.log(`\nMISSING / UNPARSED QUESTION #${found}`);
        console.log("--------------------------------");
        console.log(block);
        console.log("--------------------------------");
      }
    }

    i++;
  }

  console.log(`\nTotal question properties: ${found}`);
}

console.log("================================");
console.log("seedQuestions.js");
console.log("================================");
findMissing("./seedQuestions.js");

console.log("\n================================");
console.log("seedSubjectQuestions.js");
console.log("================================");
findMissing("./seedSubjectQuestions.js");