import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js";

dotenv.config();

const questions = [
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which gate is known as a universal gate?",
    options: ["AND", "OR", "NAND", "XOR"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "Which gate is also known as a universal gate?",
    options: ["XOR", "NOR", "AND", "NOT"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "How many inputs can a basic NOT gate have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "What is the binary representation of decimal 5?",
    options: ["101", "110", "111", "100"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "What is the binary representation of decimal 10?",
    options: ["1001", "1010", "1100", "1110"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What is the output of an AND gate when both inputs are 1?",
    options: ["0", "1", "Undefined", "High impedance"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "What is the output of an OR gate when both inputs are 0?",
    options: ["0", "1", "X", "Z"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "Which gate performs logical inversion?",
    options: ["AND", "OR", "NOT", "NAND"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "A flip-flop is a:",
    options: [
      "Combinational circuit",
      "Sequential circuit",
      "Linear circuit",
      "Power circuit",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "How many stable states does a flip-flop have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which flip-flop is commonly used as a toggle flip-flop?",
    options: ["SR", "JK", "D", "None"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What is the main function of a multiplexer?",
    options: [
      "One input to many outputs",
      "Many inputs to one output",
      "Store data",
      "Convert analog to digital",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "A demultiplexer performs:",
    options: [
      "Many inputs to one output",
      "One input to many outputs",
      "Addition",
      "Counting",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "How many select lines are required for an 8-to-1 multiplexer?",
    options: ["2", "3", "4", "8"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "A decoder with n input lines has how many maximum outputs?",
    options: ["n", "2n", "2^n", "n^2"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "Which circuit is used to add two binary bits?",
    options: [
      "Half adder",
      "Multiplexer",
      "Decoder",
      "Counter",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "A full adder has how many inputs?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "Which circuit converts binary information into decimal output lines?",
    options: ["Encoder", "Decoder", "Adder", "Register"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "An encoder performs:",
    options: [
      "Code conversion from many inputs to fewer outputs",
      "Addition",
      "Storage",
      "Counting",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "Which number system uses base 2?",
    options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "Which number system uses base 16?",
    options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
    correctAnswer: 3,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "Which number system uses base 8?",
    options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What is the hexadecimal equivalent of decimal 15?",
    options: ["E", "F", "A", "D"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which logic family generally has very low power consumption?",
    options: ["CMOS", "RTL", "DTL", "ECL"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What does CMOS stand for?",
    options: [
      "Complementary Metal Oxide Semiconductor",
      "Common Metal Oxide System",
      "Complementary Machine Operating System",
      "Controlled MOS System",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which device is used to store multiple bits of data?",
    options: ["Register", "Diode", "Resistor", "Transistor"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "A group of flip-flops used to store binary information is called a:",
    options: ["Register", "Decoder", "Encoder", "Multiplexer"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "A counter is primarily used to:",
    options: [
      "Store analog signals",
      "Count clock pulses",
      "Amplify signals",
      "Convert AC to DC",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "In a synchronous counter, flip-flops are triggered by:",
    options: [
      "Different clocks",
      "A common clock",
      "No clock",
      "Random pulses",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which Boolean law states that A + 0 = A?",
    options: [
      "Identity law",
      "Complement law",
      "Absorption law",
      "De Morgan's law",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "According to De Morgan's theorem, the complement of A+B is:",
    options: [
      "A' + B'",
      "A'B'",
      "AB",
      "A+B",
    ],
    correctAnswer: 1,
  },
];

// =====================================================
// SEED QUESTIONS
// =====================================================

const seedSubjectQuestions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    // Remove old questions for this subject
    await Question.deleteMany({
      courseId: "btech",
      subjectId: "digital-electronics",
    });

    await Question.insertMany(questions);

    console.log(
      `✅ ${questions.length} Digital Electronics questions added`
    );

    await mongoose.disconnect();

    console.log("✅ Database connection closed");
  } catch (error) {
    console.error(
      "❌ Seed Error:",
      error.message
    );

    process.exit(1);
  }
};

seedSubjectQuestions();