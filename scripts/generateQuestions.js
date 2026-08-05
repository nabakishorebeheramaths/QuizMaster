import fs from "fs";

const questions = [];

const addQuestion = (
  question,
  options,
  correctAnswer,
  category,
  difficulty
) => {
  questions.push({
    question,
    options,
    correctAnswer,
    category,
    difficulty
  });
};


// Maths Questions
for (let i = 1; i <= 200; i++) {

  const a = i + 5;
  const b = i + 10;
  const answer = a + b;

  addQuestion(
    `What is ${a} + ${b}?`,
    [
      `${answer - 5}`,
      `${answer}`,
      `${answer + 5}`,
      `${answer + 10}`
    ],
    1,
    "Maths",
    "Easy"
  );
}


// Aptitude Questions
for (let i = 1; i <= 200; i++) {

  const value = i * 10;

  addQuestion(
    `What is 10% of ${value}?`,
    [
      `${value / 20}`,
      `${value / 10}`,
      `${value / 5}`,
      `${value}`
    ],
    1,
    "Aptitude",
    "Easy"
  );
}


// Reasoning Questions
for (let i = 1; i <= 200; i++) {

  addQuestion(
    `Find the next number: ${i}, ${i + 2}, ${i + 4}, ?`,
    [
      `${i + 5}`,
      `${i + 6}`,
      `${i + 8}`,
      `${i + 10}`
    ],
    1,
    "Reasoning",
    "Medium"
  );
}


// English Questions
const english = [
  ["Synonym of Happy?", ["Sad","Joyful","Angry","Weak"],1],
  ["Opposite of Big?", ["Large","Huge","Small","Tall"],2],
  ["Synonym of Fast?", ["Slow","Quick","Late","Weak"],1],
  ["Opposite of Ancient?", ["Old","Modern","Past","Historic"],1]
];

for(let i=0;i<200;i++){

  const q = english[i % english.length];

  addQuestion(
    q[0],
    q[1],
    q[2],
    "English",
    "Easy"
  );

}


// General Knowledge
const gk = [
  [
    "Capital of India?",
    ["Mumbai","Delhi","Kolkata","Chennai"],
    1
  ],
  [
    "Largest planet?",
    ["Earth","Mars","Jupiter","Venus"],
    2
  ],
  [
    "Father of Computer?",
    ["Bill Gates","Charles Babbage","Steve Jobs","Alan Turing"],
    1
  ]
];


for(let i=0;i<100;i++){

  const q = gk[i % gk.length];

  addQuestion(
    q[0],
    q[1],
    q[2],
    "General Knowledge",
    "Medium"
  );

}


// Current Affairs
for(let i=1;i<=100;i++){

  addQuestion(
    `Which year is this quiz question number ${i}?`,
    [
      "2024",
      "2025",
      "2026",
      "2027"
    ],
    2,
    "Current Affairs",
    "Medium"
  );

}


// Save file

fs.writeFileSync(
  "./data/questions.json",
  JSON.stringify(questions,null,2)
);


console.log(
  `✅ ${questions.length} Questions JSON Created`
);