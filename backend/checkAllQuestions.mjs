import fs from "fs";

const all = [];

const norm = (s) =>
  String(s || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

const add = (q, src) => {
  if (q?.question) {
    all.push({
      key: norm(q.question),
      src,
      q: q.question
    });
  }
};

// questions.json
const sq = JSON.parse(
  fs.readFileSync("./data/questions.json", "utf8")
);
sq.forEach(q => add(q, "questions.json"));

// courseQuestions
for (const f of fs.readdirSync("./data/courseQuestions")) {
  if (!f.endsWith(".json")) continue;

  const d = JSON.parse(
    fs.readFileSync("./data/courseQuestions/" + f, "utf8")
  );

  if (Array.isArray(d)) {
    d.forEach(q => add(q, f));
  }
}

// seedQuestions.js
const s = fs.readFileSync("./seedQuestions.js", "utf8");

for (const m of s.matchAll(/question\s*:\s*"([^"]+)"/g)) {
  add({ question: m[1] }, "seedQuestions.js");
}

// seedSubjectQuestions.js
const ss = fs.readFileSync("./seedSubjectQuestions.js", "utf8");

for (const m of ss.matchAll(/question\s*:\s*"([^"]+)"/g)) {
  add({ question: m[1] }, "seedSubjectQuestions.js");
}

// Duplicate check
const map = new Map();

for (const x of all) {
  if (!map.has(x.key)) {
    map.set(x.key, []);
  }

  map.get(x.key).push(x);
}

const dup = [...map.values()].filter(x => x.length > 1);

console.log("================================");
console.log("RAW QUESTIONS:", all.length);
console.log("UNIQUE QUESTIONS:", map.size);
console.log("DUPLICATE GROUPS:", dup.length);
console.log("DUPLICATE ENTRIES:", all.length - map.size);
console.log("================================");

dup.slice(0, 20).forEach((g, i) => {
  console.log(`${i + 1}. ${g[0].q}`);
  console.log("   " + g.map(x => x.src).join(" | "));
});
