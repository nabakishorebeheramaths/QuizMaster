import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js";

dotenv.config();
const questions = [
    // =====================================================
  // DIGITAL ELECTRONICS
  // =====================================================
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
    question: "Which number system uses base 8?",
    options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
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
    question: "What is the hexadecimal equivalent of decimal 15?",
    options: ["E", "F", "A", "D"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What is the decimal equivalent of binary 1010?",
    options: ["8", "10", "12", "14"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What is the binary equivalent of decimal 15?",
    options: ["1010", "1110", "1111", "1001"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "Which gate is known as a universal gate?",
    options: ["AND", "OR", "NAND", "XOR"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "Which other gate is known as a universal gate?",
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
    question: "Which gate performs logical inversion?",
    options: ["AND", "OR", "NOT", "NAND"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
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
    difficulty: "Medium",
    question: "What is the output of a NAND gate when both inputs are 1?",
    options: ["0", "1", "X", "Z"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What is the output of a NOR gate when both inputs are 0?",
    options: ["0", "1", "X", "Z"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What is the output of an XOR gate when both inputs are different?",
    options: ["0", "1", "Undefined", "High impedance"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What is the output of an XOR gate when both inputs are the same?",
    options: ["0", "1", "X", "Z"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "According to De Morgan's theorem, the complement of A + B is:",
    options: ["A' + B'", "A'B'", "AB", "A + B"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "According to De Morgan's theorem, the complement of AB is:",
    options: ["A'B'", "A + B", "A' + B'", "AB"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which Boolean law states that A + 0 = A?",
    options: ["Identity law", "Complement law", "Absorption law", "De Morgan's law"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which Boolean law states that A · 1 = A?",
    options: ["Identity law", "Null law", "Complement law", "Involution law"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which Boolean law states that A + A = A?",
    options: ["Idempotent law", "Complement law", "Associative law", "Distributive law"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
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
    question: "Which flip-flop is commonly used for data storage?",
    options: ["D flip-flop", "JK flip-flop", "T flip-flop", "SR flip-flop"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "In a JK flip-flop, when J = 1 and K = 1, the output:",
    options: ["Resets", "Sets", "Toggles", "Remains unchanged"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "In a D flip-flop, the output follows the:",
    options: ["Clock", "Input D", "Reset", "Complement"],
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
    question: "How many inputs does a 4-to-1 multiplexer have?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "A decoder with n input lines has how many maximum outputs?",
    options: ["n", "2n", "2^n", "n²"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "Which circuit is used to add two binary bits?",
    options: ["Half adder", "Multiplexer", "Decoder", "Counter"],
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
    difficulty: "Medium",
    question: "A full adder produces how many outputs?",
    options: ["1", "2", "3", "4"],
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
    question: "Which logic family has the highest speed among traditional logic families?",
    options: ["RTL", "DTL", "ECL", "CMOS"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What is propagation delay?",
    options: [
      "Power consumed by a gate",
      "Time taken for output to respond to an input change",
      "Voltage supplied to a gate",
      "Current flowing through a gate",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which circuit converts an analog signal into a digital signal?",
    options: ["DAC", "ADC", "Encoder", "Multiplexer"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which circuit converts a digital signal into an analog signal?",
    options: ["ADC", "DAC", "Decoder", "Counter"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What is the main purpose of a Karnaugh map?",
    options: [
      "To store data",
      "To simplify Boolean expressions",
      "To amplify signals",
      "To generate clock pulses",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "How many cells are present in a 3-variable Karnaugh map?",
    options: ["4", "6", "8", "16"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "How many cells are present in a 4-variable Karnaugh map?",
    options: ["4", "8", "16", "32"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which type of circuit depends only on present inputs?",
    options: [
      "Sequential circuit",
      "Combinational circuit",
      "Counter",
      "Register",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which type of circuit depends on present inputs and previous state?",
    options: [
      "Combinational circuit",
      "Sequential circuit",
      "Decoder",
      "Multiplexer",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "Which memory is volatile?",
    options: ["ROM", "RAM", "PROM", "EPROM"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Easy",
    question: "Which memory retains data even when power is removed?",
    options: ["RAM", "ROM", "Register", "Cache"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What does ROM stand for?",
    options: [
      "Read Only Memory",
      "Random Output Memory",
      "Read Output Module",
      "Random Only Memory",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "digital-electronics",
    category: "Digital Electronics",
    difficulty: "Medium",
    question: "What does RAM stand for?",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Rapid Access Module",
      "Random Analog Memory",
    ],
    correctAnswer: 1,
  },
 // =====================================================
  // ENGINEERING MATHEMATICS
  // =====================================================
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the derivative of x³ with respect to x?",
    options: ["x²", "2x²", "3x²", "3x"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the derivative of x⁵ with respect to x?",
    options: ["5x⁴", "4x⁵", "x⁴", "5x"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the derivative of cos x?",
    options: ["sin x", "-sin x", "cos x", "-cos x"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the derivative of tan x?",
    options: ["sec²x", "cosec²x", "tan²x", "sec x"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the derivative of ln x?",
    options: ["x", "1/x", "ln x", "eˣ"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the derivative of sin(2x)?",
    options: ["cos(2x)", "2cos(2x)", "2sin(2x)", "-2cos(2x)"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the derivative of e^(2x)?",
    options: ["e^(2x)", "2e^(2x)", "xe^(2x)", "2xe^(2x)"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the second derivative of x³?",
    options: ["3x²", "6x", "6", "x"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is ∫x² dx?",
    options: ["x³/3 + C", "x²/2 + C", "2x + C", "x³ + C"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is ∫cos x dx?",
    options: ["-sin x + C", "sin x + C", "cos x + C", "-cos x + C"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is ∫sin x dx?",
    options: ["cos x + C", "-cos x + C", "sin x + C", "-sin x + C"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is ∫eˣ dx?",
    options: ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln x + C"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the value of sin 0°?",
    options: ["0", "1", "-1", "1/2"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the value of cos 90°?",
    options: ["0", "1", "-1", "1/2"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the value of tan 0°?",
    options: ["0", "1", "-1", "Undefined"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the value of sin²θ + cos²θ?",
    options: ["0", "1", "2", "sin θ"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the value of 1 + tan²θ?",
    options: ["sec²θ", "cosec²θ", "sin²θ", "cos²θ"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the determinant of [[1, 0], [0, 1]]?",
    options: ["0", "1", "2", "-1"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "A matrix with equal number of rows and columns is called:",
    options: ["Row matrix", "Column matrix", "Square matrix", "Null matrix"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "A matrix having all elements equal to zero is called:",
    options: ["Identity matrix", "Null matrix", "Diagonal matrix", "Scalar matrix"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "A square matrix with ones on the main diagonal and zeros elsewhere is called:",
    options: ["Null matrix", "Identity matrix", "Row matrix", "Singular matrix"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "If the determinant of a matrix is non-zero, the matrix is:",
    options: ["Singular", "Non-singular", "Null", "Symmetric"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "The transpose of a matrix is obtained by:",
    options: [
      "Changing signs of all elements",
      "Interchanging rows and columns",
      "Multiplying by zero",
      "Finding its determinant",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "A matrix A is symmetric if:",
    options: ["A = -A", "A = Aᵀ", "A = 0", "det(A) = 0"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "The eigenvalues of an identity matrix are:",
    options: ["0", "1", "-1", "Depends on matrix size"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is log₁₀(100)?",
    options: ["1", "2", "10", "100"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is ln(1)?",
    options: ["0", "1", "e", "-1"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is e⁰?",
    options: ["0", "1", "e", "-1"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the Laplace transform of t²?",
    options: ["1/s", "2/s³", "1/s²", "2/s²"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the Laplace transform of sin(at)?",
    options: [
      "a/(s²+a²)",
      "s/(s²+a²)",
      "1/(s+a)",
      "a/(s+a)",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the Laplace transform of cos(at)?",
    options: [
      "a/(s²+a²)",
      "s/(s²+a²)",
      "1/(s+a)",
      "s/(s+a)",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the inverse Laplace transform of 1/s²?",
    options: ["1", "t", "t²", "eᵗ"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "The order of a differential equation is determined by:",
    options: [
      "Highest power of variable",
      "Highest derivative present",
      "Number of terms",
      "Constant term",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "The degree of a differential equation is the:",
    options: [
      "Order of equation",
      "Power of the highest order derivative",
      "Number of variables",
      "Number of constants",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the general solution of dy/dx = 0?",
    options: ["y = x", "y = C", "y = eˣ", "y = x²"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "Which method is commonly used to solve first-order differential equations numerically?",
    options: [
      "Euler's method",
      "Newton's law",
      "Gauss law",
      "Boolean method",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the value of ∫₀¹ x dx?",
    options: ["0", "1/2", "1", "2"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the value of ∫₀^π sin x dx?",
    options: ["0", "1", "2", "π"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the value of ∫₀^(π/2) cos x dx?",
    options: ["0", "1", "2", "π/2"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "The probability of an impossible event is:",
    options: ["0", "1", "1/2", "-1"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "The probability of a certain event is:",
    options: ["0", "1", "1/2", "-1"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "If a fair coin is tossed once, what is the probability of getting a head?",
    options: ["0", "1/4", "1/2", "1"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "If a fair die is rolled once, what is the probability of getting a 6?",
    options: ["1/2", "1/3", "1/6", "1/12"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "The mean of 2, 4, 6, and 8 is:",
    options: ["4", "5", "6", "20"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "The median of 2, 4, 6, 8, and 10 is:",
    options: ["4", "5", "6", "8"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "14"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is 2⁵?",
    options: ["16", "32", "64", "25"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "If z = 3 + 4i, what is |z|?",
    options: ["3", "4", "5", "7"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is i²?",
    options: ["1", "-1", "i", "0"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the conjugate of 3 + 4i?",
    options: ["3 + 4i", "3 - 4i", "-3 + 4i", "-3 - 4i"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "A vector having magnitude zero is called:",
    options: [
      "Unit vector",
      "Null vector",
      "Position vector",
      "Normal vector",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "The dot product of two perpendicular vectors is:",
    options: ["1", "0", "-1", "Infinity"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "The cross product of two parallel vectors is:",
    options: ["1", "0", "Maximum", "Undefined"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the divergence of a constant vector field?",
    options: ["0", "1", "Infinity", "Depends on vector"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the gradient of a scalar field?",
    options: [
      "A scalar quantity",
      "A vector quantity",
      "A matrix only",
      "A constant only",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the divergence of a vector field?",
    options: [
      "Scalar quantity",
      "Vector quantity",
      "Matrix",
      "Tensor only",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "What is the curl of a conservative vector field?",
    options: ["1", "0", "Infinity", "Undefined"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "Which theorem relates a line integral around a closed curve to a surface integral?",
    options: [
      "Green's theorem",
      "Stokes' theorem",
      "Taylor's theorem",
      "Rolle's theorem",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "Which theorem relates a double integral over a region to a line integral around its boundary?",
    options: [
      "Green's theorem",
      "Stokes' theorem",
      "Gauss theorem",
      "Mean value theorem",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "Which numerical method is commonly used to solve nonlinear equations?",
    options: [
      "Newton-Raphson method",
      "Euler method",
      "Gauss law",
      "Boolean method",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "Which method is commonly used to solve simultaneous linear equations?",
    options: [
      "Gauss elimination",
      "Euler method",
      "Newton's law",
      "Runge method",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "Which method is used for numerical integration?",
    options: [
      "Simpson's rule",
      "Newton-Raphson method",
      "Gauss elimination",
      "Euler method",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Medium",
    question: "Which method is used to find approximate roots by repeatedly narrowing an interval?",
    options: [
      "Bisection method",
      "Euler method",
      "Simpson's rule",
      "Gauss elimination",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "engineering-mathematics",
    category: "Engineering Mathematics",
    difficulty: "Easy",
    question: "What is the factorial of 5?",
    options: ["20", "60", "120", "125"],
    correctAnswer: 2,
  },

  // =====================================================
  // ANALOG ELECTRONICS
  // =====================================================
{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "A semiconductor material has conductivity between that of:",
  options: [
    "Conductor and insulator",
    "Two conductors",
    "Two insulators",
    "Metal and vacuum"
  ],
  correctAnswer: 0,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "Which of the following is a semiconductor material?",
  options: [
    "Copper",
    "Silicon",
    "Aluminium",
    "Iron"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "The most commonly used semiconductor materials are:",
  options: [
    "Copper and aluminium",
    "Silicon and germanium",
    "Iron and nickel",
    "Gold and silver"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "A pure semiconductor is called:",
  options: [
    "Extrinsic semiconductor",
    "Intrinsic semiconductor",
    "Metallic semiconductor",
    "Insulating semiconductor"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "An N-type semiconductor is formed by adding:",
  options: [
    "Trivalent impurity",
    "Pentavalent impurity",
    "Divalent impurity",
    "Monovalent impurity"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "A P-type semiconductor is formed by adding:",
  options: [
    "Pentavalent impurity",
    "Trivalent impurity",
    "Hexavalent impurity",
    "Monovalent impurity"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "The majority carriers in an N-type semiconductor are:",
  options: [
    "Holes",
    "Electrons",
    "Protons",
    "Neutrons"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "The majority carriers in a P-type semiconductor are:",
  options: [
    "Electrons",
    "Holes",
    "Protons",
    "Neutrons"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "A PN junction is formed by joining:",
  options: [
    "Two P-type materials",
    "P-type and N-type materials",
    "Two N-type materials",
    "A conductor and an insulator"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "The region around a PN junction depleted of free charge carriers is called:",
  options: [
    "Active region",
    "Depletion region",
    "Saturation region",
    "Breakdown region"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "A diode is primarily a:",
  options: [
    "Two-terminal device",
    "Three-terminal device",
    "Four-terminal device",
    "Five-terminal device"
  ],
  correctAnswer: 0,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "The ideal diode conducts current in:",
  options: [
    "Both directions",
    "Forward direction only",
    "Reverse direction only",
    "No direction"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "In forward bias, the P-side of a diode is connected to:",
  options: [
    "Negative terminal",
    "Positive terminal",
    "Ground only",
    "No supply"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "In reverse bias, the P-side of a diode is connected to:",
  options: [
    "Positive terminal",
    "Negative terminal",
    "Both terminals",
    "Ground only"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "The approximate forward voltage of a silicon diode is:",
  options: [
    "0.1 V",
    "0.3 V",
    "0.7 V",
    "1.5 V"
  ],
  correctAnswer: 2,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "The approximate forward voltage of a germanium diode is:",
  options: [
    "0.1 V",
    "0.3 V",
    "0.7 V",
    "1.2 V"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "A Zener diode is normally operated in:",
  options: [
    "Forward active region",
    "Reverse breakdown region",
    "Cutoff region",
    "Saturation region"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "The main application of a Zener diode is:",
  options: [
    "Voltage regulation",
    "Current amplification",
    "Frequency generation",
    "Power amplification"
  ],
  correctAnswer: 0,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "An LED converts electrical energy mainly into:",
  options: [
    "Heat energy",
    "Light energy",
    "Mechanical energy",
    "Sound energy"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "LED stands for:",
  options: [
    "Light Emitting Diode",
    "Low Energy Device",
    "Light Electronic Device",
    "Linear Emitting Diode"
  ],
  correctAnswer: 0,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "A photodiode is generally operated in:",
  options: [
    "Forward bias",
    "Reverse bias",
    "Zero bias only",
    "Saturation only"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "A transistor is generally a:",
  options: [
    "Two-terminal device",
    "Three-terminal device",
    "Four-terminal device",
    "One-terminal device"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "BJT stands for:",
  options: [
    "Bipolar Junction Transistor",
    "Binary Junction Transistor",
    "Basic Junction Technology",
    "Bipolar Junction Technology"
  ],
  correctAnswer: 0,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Easy",
  question: "The three terminals of a BJT are:",
  options: [
    "Gate, Source, Drain",
    "Emitter, Base, Collector",
    "Anode, Cathode, Gate",
    "Input, Output, Ground"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "Which type of transistor has two PN junctions?",
  options: [
    "BJT",
    "FET",
    "MOSFET only",
    "SCR"
  ],
  correctAnswer: 0,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "In a common-emitter configuration, the input is applied between:",
  options: [
    "Base and emitter",
    "Collector and emitter",
    "Base and collector",
    "Collector and ground"
  ],
  correctAnswer: 0,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "The common-emitter amplifier provides:",
  options: [
    "Only voltage gain",
    "Only current gain",
    "Both voltage and current gain",
    "No gain"
  ],
  correctAnswer: 2,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "The current gain of a common-emitter transistor configuration is represented by:",
  options: [
    "α",
    "β",
    "γ",
    "δ"
  ],
  correctAnswer: 1,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Medium",
  question: "The current gain β of a transistor is defined as:",
  options: [
    "IC / IB",
    "IB / IC",
    "IE / IC",
    "IC / IE"
  ],
  correctAnswer: 0,
},

{
  courseId: "btech",
  subjectId: "analog-electronics",
  category: "Analog Electronics",
  difficulty: "Hard",
  question: "The relation between emitter, collector and base currents in a BJT is:",
  options: [
    "IE = IC + IB",
    "IC = IE + IB",
    "IB = IE + IC",
    "IE = IC - IB"
  ],
  correctAnswer: 0,
},
// =====================================================
  // PROGRAMMING
  // =====================================================
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which language is known as a low-level programming language?",
    options: ["Python", "C", "Assembly", "JavaScript"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which symbol is used to terminate a statement in C?",
    options: [".", ",", ";", ":"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which data type is used to store an integer in C?",
    options: ["float", "int", "char", "double"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which data type is used to store a single character in C?",
    options: ["char", "int", "float", "double"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which data type is used to store decimal values?",
    options: ["int", "char", "float", "void"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which operator is used for assignment in C?",
    options: ["==", "=", "!=", ">="],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which operator is used to compare two values for equality?",
    options: ["=", "==", "!=", "&&"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which operator represents logical AND in C?",
    options: ["&", "&&", "||", "!"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which operator represents logical OR in C?",
    options: ["&&", "|", "||", "!"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which operator is used for logical NOT?",
    options: ["!", "&&", "||", "~"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which keyword is used to define a constant in C?",
    options: ["constant", "const", "define", "static"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which function is the entry point of a C program?",
    options: ["start()", "main()", "begin()", "run()"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which header file is commonly used for printf() and scanf()?",
    options: ["string.h", "math.h", "stdio.h", "stdlib.h"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which function is used to print formatted output in C?",
    options: ["scanf()", "printf()", "print()", "output()"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which function is used to read formatted input in C?",
    options: ["printf()", "scanf()", "input()", "read()"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "nested for"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which loop is generally used when the number of iterations is known?",
    options: ["for", "while", "do-while", "switch"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which statement is used to exit a loop immediately?",
    options: ["continue", "break", "exitloop", "stop"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which statement skips the current iteration of a loop?",
    options: ["break", "continue", "skip", "pass"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which statement is used for decision making in C?",
    options: ["if", "loop", "goto", "include"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which statement is used for multiple-choice selection?",
    options: ["if", "switch", "while", "for"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which keyword is used with switch cases?",
    options: ["option", "case", "choice", "select"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which keyword is used to return a value from a function?",
    options: ["send", "return", "back", "output"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is a function in programming?",
    options: [
      "A hardware device",
      "A reusable block of code",
      "A data type",
      "A compiler",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is recursion?",
    options: [
      "A loop without condition",
      "A function calling itself",
      "A variable declaration",
      "A compiler error",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "What is an array?",
    options: [
      "Collection of similar data elements",
      "A function",
      "A compiler",
      "A loop",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "In C, array indexing starts from:",
    options: ["0", "1", "-1", "2"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "How many elements can an int a[10] array store?",
    options: ["9", "10", "11", "20"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which data structure stores elements in contiguous memory locations?",
    options: ["Array", "Linked list", "Tree", "Graph"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is a pointer in C?",
    options: [
      "A variable storing an address",
      "A constant value",
      "A loop",
      "A function",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which operator is used to obtain the address of a variable?",
    options: ["*", "&", "#", "@"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which operator is used to access the value stored at a pointer address?",
    options: ["&", "*", "#", "%"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which keyword is used to declare a pointer?",
    options: ["pointer", "No special keyword is required", "ptr", "address"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is a string in C?",
    options: [
      "An array of characters terminated by null character",
      "An integer",
      "A floating-point number",
      "A pointer only",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which character terminates a C string?",
    options: ["\\n", "\\0", "\\t", "\\b"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which header file contains string handling functions?",
    options: ["stdio.h", "string.h", "stdlib.h", "ctype.h"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which function returns the length of a string in C?",
    options: ["strcpy()", "strlen()", "strcmp()", "strcat()"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which function is used to copy one string into another?",
    options: ["strlen()", "strcpy()", "strcmp()", "strcat()"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which function is used to compare two strings?",
    options: ["strcpy()", "strlen()", "strcmp()", "strcat()"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which function is used to concatenate two strings?",
    options: ["strcat()", "strlen()", "strcmp()", "strcpy()"],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is the purpose of a compiler?",
    options: [
      "Execute hardware",
      "Translate source code into machine code",
      "Store data",
      "Create networks",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which of the following is an interpreted programming language?",
    options: ["Machine language", "Assembly", "Python", "Binary"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Python is primarily known as a:",
    options: [
      "High-level programming language",
      "Machine language",
      "Assembly language",
      "Hardware language",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Easy",
    question: "Which symbol is used for comments in Python for a single line?",
    options: ["//", "#", "/*", "--"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "fun", "define"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which data structure in Python stores ordered mutable elements?",
    options: ["Tuple", "List", "Set", "String"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which data structure in Python is immutable?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which data structure stores key-value pairs in Python?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is object-oriented programming?",
    options: [
      "Programming based only on functions",
      "Programming based on objects and classes",
      "Programming without variables",
      "Programming without data",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which OOP concept hides internal implementation details?",
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which OOP concept allows a class to acquire properties of another class?",
    options: ["Encapsulation", "Inheritance", "Abstraction", "Compilation"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which OOP concept allows one interface to have multiple implementations?",
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Iteration"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is debugging?",
    options: [
      "Writing new hardware",
      "Finding and fixing program errors",
      "Compiling a program",
      "Deleting source code",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is a syntax error?",
    options: [
      "Error caused by incorrect program grammar",
      "Hardware failure",
      "Network failure",
      "Memory upgrade",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is a runtime error?",
    options: [
      "Error occurring while the program is executing",
      "Error in keyboard",
      "Error before writing code",
      "Compiler installation",
    ],
    correctAnswer: 0,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is an algorithm?",
    options: [
      "A programming language",
      "A step-by-step procedure to solve a problem",
      "A computer processor",
      "A database",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is pseudocode?",
    options: [
      "Machine code",
      "Informal representation of an algorithm",
      "Binary data",
      "Compiler output",
    ],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is the time complexity of accessing an array element by index?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which sorting algorithm repeatedly compares adjacent elements?",
    options: ["Merge sort", "Bubble sort", "Quick sort", "Selection sort"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which sorting algorithm uses divide and conquer?",
    options: ["Bubble sort", "Merge sort", "Selection sort", "Insertion sort"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which searching algorithm requires sorted data?",
    options: ["Linear search", "Binary search", "Sequential search", "Random search"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "What is the average time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Hard",
    question: "What is the time complexity of a nested loop where both loops run n times?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(2n)"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Hard",
    question: "Which notation represents the upper bound of an algorithm's growth rate?",
    options: ["Omega", "Theta", "Big-O", "Delta"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Hard",
    question: "Which notation represents the tight asymptotic bound?",
    options: ["Big-O", "Big-Omega", "Theta", "Sigma"],
    correctAnswer: 2,
  },
  {
    courseId: "btech",
    subjectId: "programming",
    category: "Programming",
    difficulty: "Medium",
    question: "Which programming paradigm is primarily associated with classes and objects?",
    options: [
      "Procedural programming",
      "Object-oriented programming",
      "Functional programming",
      "Logic programming",
    ],
    correctAnswer: 1,
  },
  // =====================================================
  // DATA STRUCTURES
  // =====================================================

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which data structure follows the LIFO principle?",
options: ["Queue", "Stack", "Array", "Linked List"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which data structure follows the FIFO principle?",
options: ["Stack", "Queue", "Tree", "Graph"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which data structure is used to implement recursion?",
options: ["Queue", "Stack", "Array", "Graph"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "What is the first index of an array in C?",
options: ["0", "1", "-1", "Depends on size"],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which data structure stores elements in contiguous memory locations?",
options: ["Linked List", "Array", "Tree", "Graph"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the time complexity of accessing an element by index in an array?",
options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which data structure consists of nodes connected using pointers?",
options: ["Array", "Linked List", "Stack", "Queue"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "In a singly linked list, each node contains:",
options: [
"Only data",
"Data and a pointer to the next node",
"Only a pointer",
"Data and two pointers"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which pointer in the last node of a singly linked list generally contains:",
options: ["First node", "NULL", "Previous node", "Random address"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the time complexity of inserting an element at the beginning of a linked list?",
options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which operation adds an element to a stack?",
options: ["Pop", "Push", "Peek", "Delete"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which operation removes an element from a stack?",
options: ["Push", "Pop", "Insert", "Enqueue"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which operation adds an element to a queue?",
options: ["Push", "Pop", "Enqueue", "Peek"],
correctAnswer: 2,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which operation removes an element from a queue?",
options: ["Dequeue", "Push", "Enqueue", "Insert"],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure is commonly used for Breadth First Search?",
options: ["Stack", "Queue", "Array", "Heap"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure is commonly used for Depth First Search?",
options: ["Queue", "Stack", "Heap", "Hash Table"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "A tree is a:",
options: [
"Linear data structure",
"Non-linear data structure",
"Primitive data type",
"Sequential file"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "A tree with no children for a node is called a:",
options: ["Root", "Leaf", "Parent", "Sibling"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "The topmost node of a tree is called:",
options: ["Leaf", "Root", "Child", "Edge"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "A binary tree can have at most how many children per node?",
options: ["1", "2", "3", "4"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which traversal of a binary tree visits Root, Left, Right?",
options: [
"Inorder",
"Preorder",
"Postorder",
"Level order"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which traversal of a binary tree visits Left, Root, Right?",
options: [
"Preorder",
"Inorder",
"Postorder",
"Level order"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which traversal of a binary tree visits Left, Right, Root?",
options: [
"Preorder",
"Inorder",
"Postorder",
"Level order"
],
correctAnswer: 2,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "In a Binary Search Tree, values in the left subtree are generally:",
options: [
"Greater than the root",
"Less than the root",
"Equal to the root",
"Random"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "In a Binary Search Tree, values in the right subtree are generally:",
options: [
"Less than the root",
"Greater than the root",
"Always equal",
"Zero"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which traversal of a Binary Search Tree produces sorted order?",
options: [
"Preorder",
"Inorder",
"Postorder",
"Level order"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "What is the degree of a leaf node?",
options: ["0", "1", "2", "3"],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "A graph consists mainly of:",
options: [
"Nodes and arrays",
"Vertices and edges",
"Stacks and queues",
"Roots and leaves"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Another name for a vertex in a graph is:",
options: ["Node", "Root", "Leaf", "Pointer"],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "A graph in which edges have direction is called:",
options: [
"Undirected graph",
"Directed graph",
"Complete graph",
"Simple tree"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure is commonly used to represent a priority queue efficiently?",
options: ["Heap", "Stack", "Linked List", "Array only"],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which heap keeps the smallest element at the root?",
options: ["Max Heap", "Min Heap", "Binary Search Tree", "Graph"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which heap keeps the largest element at the root?",
options: ["Min Heap", "Max Heap", "AVL Tree", "Trie"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the average time complexity of searching in a hash table?",
options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "A collision in hashing occurs when:",
options: [
"Two keys map to the same index",
"A key is deleted",
"The table is empty",
"A key is sorted"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which technique is used to handle collisions in hashing?",
options: [
"Linear probing",
"Binary search",
"DFS",
"Recursion only"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which algorithm is used to find the shortest path from a source in a graph with non-negative edge weights?",
options: [
"DFS",
"Dijkstra's algorithm",
"Binary Search",
"Bubble Sort"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which algorithm is commonly used to find a minimum spanning tree?",
options: [
"Merge Sort",
"Kruskal's algorithm",
"Binary Search",
"DFS only"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which sorting algorithm repeatedly swaps adjacent elements if they are in the wrong order?",
options: [
"Merge Sort",
"Bubble Sort",
"Quick Sort",
"Heap Sort"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the average time complexity of Quick Sort?",
options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the worst-case time complexity of Quick Sort?",
options: ["O(log n)", "O(n)", "O(n log n)", "O(n²)"],
correctAnswer: 3,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the time complexity of Merge Sort?",
options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
correctAnswer: 2,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which sorting algorithm has a best-case time complexity of O(n) when the array is already sorted?",
options: [
"Bubble Sort with optimization",
"Selection Sort",
"Heap Sort",
"Merge Sort"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which sorting algorithm selects the minimum element and places it at the beginning?",
options: [
"Selection Sort",
"Bubble Sort",
"Merge Sort",
"Quick Sort"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which sorting algorithm builds the final sorted array one item at a time?",
options: [
"Insertion Sort",
"Heap Sort",
"Selection Sort",
"Merge Sort"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Binary search can be directly applied to:",
options: [
"Any unsorted array",
"A sorted array",
"Only linked lists",
"Only trees"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the time complexity of binary search?",
options: ["O(n)", "O(n²)", "O(log n)", "O(1) always"],
correctAnswer: 2,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure is best suited for implementing an undo operation?",
options: ["Queue", "Stack", "Graph", "Heap"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure is useful for representing hierarchical relationships?",
options: ["Array", "Tree", "Stack", "Queue"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the maximum number of edges in a simple undirected graph with n vertices?",
options: [
"n",
"n - 1",
"n(n - 1)/2",
"n²"
],
correctAnswer: 2,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure is commonly used to implement a graph using a matrix?",
options: [
"Adjacency Matrix",
"Stack Matrix",
"Queue Matrix",
"Heap Matrix"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which graph representation uses a list for each vertex to store its adjacent vertices?",
options: [
"Adjacency Matrix",
"Adjacency List",
"Binary Tree",
"Hash Table"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the main advantage of a linked list over an array?",
options: [
"Constant-time random access",
"Dynamic size",
"Always uses less memory",
"Faster binary search"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which linked list has pointers in both forward and backward directions?",
options: [
"Singly linked list",
"Doubly linked list",
"Circular singly linked list",
"Static linked list"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "In a circular linked list, the last node points to:",
options: [
"NULL",
"The first node",
"The previous node",
"Any random node"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which self-balancing binary search tree maintains balance using rotations?",
options: [
"AVL Tree",
"Binary Heap",
"Trie",
"Graph"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the maximum height of an AVL tree maintained approximately as:",
options: [
"O(n)",
"O(log n)",
"O(n²)",
"O(1)"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure is commonly used for storing strings efficiently based on prefixes?",
options: [
"Trie",
"Stack",
"Queue",
"Heap"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which concept allows a function to call itself?",
options: [
"Iteration",
"Recursion",
"Hashing",
"Sorting"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which data structure is used internally by most recursive function calls?",
options: [
"Queue",
"Call stack",
"Heap only",
"Graph"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which sorting algorithm is generally stable and uses divide-and-conquer?",
options: [
"Merge Sort",
"Selection Sort",
"Heap Sort",
"Quick Sort always"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which algorithm uses divide-and-conquer to search a sorted array?",
options: [
"Linear Search",
"Binary Search",
"BFS",
"DFS"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "What is the time complexity of linear search in the worst case?",
options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
correctAnswer: 2,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure supports insertion and deletion from both ends?",
options: [
"Deque",
"Stack only",
"Priority Queue",
"Binary Tree"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Deque stands for:",
options: [
"Double Ended Queue",
"Dynamic End Queue",
"Direct End Queue",
"Double Entry Queue"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which operation is performed at the top of a stack?",
options: [
"Push and Pop",
"Enqueue only",
"Dequeue only",
"Search only"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which traversal can be used to detect a cycle in a directed graph with appropriate bookkeeping?",
options: [
"DFS",
"Binary Search",
"Bubble Sort",
"Heap Sort"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which algorithm is used to find a minimum spanning tree by repeatedly selecting the smallest edge that does not create a cycle?",
options: [
"Kruskal's algorithm",
"Binary Search",
"Merge Sort",
"Dijkstra's algorithm"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which algorithm finds shortest paths from a single source and can handle negative edge weights when there is no negative cycle?",
options: [
"Dijkstra's algorithm",
"Bellman-Ford algorithm",
"Prim's algorithm",
"Kruskal's algorithm"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which algorithm is commonly used to find a minimum spanning tree by growing a tree from a starting vertex?",
options: [
"Prim's algorithm",
"Binary Search",
"Bellman-Ford",
"Merge Sort"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What does Big-O notation primarily describe?",
options: [
"Exact memory address",
"Asymptotic upper bound of growth",
"Programming language",
"Database size"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which complexity is generally considered better for large input sizes?",
options: ["O(n²)", "O(n log n)", "O(2^n)", "O(n!)"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure can be used to implement a priority queue?",
options: [
"Heap",
"Stack only",
"Linked list only",
"Graph only"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which of the following is a linear data structure?",
options: ["Tree", "Graph", "Stack", "Heap"],
correctAnswer: 2,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which of the following is a non-linear data structure?",
options: ["Array", "Queue", "Stack", "Tree"],
correctAnswer: 3,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the time complexity of inserting an element at the end of an array when free space is available?",
options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure is best suited for implementing function call management?",
options: ["Stack", "Queue", "Graph", "Heap"],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is a node with no parent in a tree called?",
options: ["Leaf", "Root", "Child", "Sibling"],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the number of edges in a tree containing n vertices?",
options: ["n", "n + 1", "n - 1", "2n"],
correctAnswer: 2,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which traversal of a tree is generally implemented using a queue?",
options: [
"Preorder",
"Inorder",
"Postorder",
"Level order"
],
correctAnswer: 3,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which traversal of a tree is commonly implemented using recursion?",
options: [
"Preorder",
"Inorder",
"Postorder",
"All of the above"
],
correctAnswer: 3,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "What is the main purpose of balancing a Binary Search Tree?",
options: [
"Increase memory usage",
"Maintain efficient search operations",
"Remove all leaves",
"Convert it into a graph"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which operation checks the top element of a stack without removing it?",
options: [
"Push",
"Pop",
"Peek",
"Enqueue"
],
correctAnswer: 2,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which operation checks the front element of a queue without removing it?",
options: [
"Peek",
"Push",
"Pop",
"Insert"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which data structure provides efficient prefix-based searching?",
options: [
"Trie",
"Stack",
"Queue",
"Binary Heap"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which sorting algorithm uses a heap data structure?",
options: [
"Heap Sort",
"Bubble Sort",
"Insertion Sort",
"Linear Search"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which sorting algorithm has O(n log n) worst-case time complexity?",
options: [
"Merge Sort",
"Bubble Sort",
"Selection Sort",
"Insertion Sort"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Easy",
question: "Which search algorithm checks elements one by one?",
options: [
"Binary Search",
"Linear Search",
"DFS",
"BFS"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure is commonly used in operating systems for scheduling processes?",
options: [
"Queue",
"Stack only",
"Tree only",
"Graph only"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which type of queue gives priority to elements based on priority rather than arrival time?",
options: [
"Circular Queue",
"Priority Queue",
"Simple Queue",
"Deque"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which queue connects the last position back to the first position?",
options: [
"Simple Queue",
"Circular Queue",
"Priority Queue",
"Deque"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which technique is commonly used to resolve hash collisions by maintaining multiple elements at each index?",
options: [
"Chaining",
"Binary Search",
"Recursion",
"Tree Rotation"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure is typically used to implement an efficient undo-redo system?",
options: [
"Stack",
"Queue",
"Graph",
"Heap"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the worst-case search complexity of an unbalanced Binary Search Tree?",
options: [
"O(1)",
"O(log n)",
"O(n)",
"O(n log n)"
],
correctAnswer: 2,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "What is the average search complexity of a balanced Binary Search Tree?",
options: [
"O(1)",
"O(log n)",
"O(n)",
"O(n²)"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which data structure is commonly used in memory allocation systems to manage free blocks efficiently?",
options: [
"Free list",
"Stack only",
"Queue only",
"Graph only"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure allows insertion and deletion at both the front and rear?",
options: [
"Deque",
"Stack",
"Simple Queue",
"Binary Tree"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which graph traversal explores all neighboring vertices before moving to the next level?",
options: [
"DFS",
"BFS",
"Inorder",
"Postorder"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which graph traversal goes as deep as possible before backtracking?",
options: [
"BFS",
"DFS",
"Level Order",
"Binary Search"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which data structure is most suitable for implementing BFS efficiently?",
options: [
"Queue",
"Stack",
"Heap",
"Trie"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which data structure is most suitable for implementing iterative DFS?",
options: [
"Queue",
"Stack",
"Heap",
"Deque only"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which algorithm is based on repeatedly dividing the problem into smaller subproblems and combining their results?",
options: [
"Divide and Conquer",
"Greedy only",
"Hashing",
"Linear Search"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Merge Sort is an example of:",
options: [
"Divide and Conquer",
"Greedy algorithm",
"Backtracking only",
"Hashing"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which technique stores results of overlapping subproblems to avoid repeated computation?",
options: [
"Dynamic Programming",
"Linear Search",
"Hash Collision",
"Tree Traversal"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which algorithmic technique makes a locally optimal choice at each step?",
options: [
"Greedy Method",
"Dynamic Programming",
"Divide and Conquer",
"Backtracking"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which technique explores possible solutions and backtracks when a choice cannot lead to a valid solution?",
options: [
"Backtracking",
"Hashing",
"Sorting",
"Binary Search"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "Which data structure is used by a heap to maintain a complete binary tree structure?",
options: [
"Array",
"Stack",
"Queue",
"Linked List only"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Medium",
question: "A complete binary tree is filled:",
options: [
"Only on the right side",
"Level by level from left to right",
"Randomly",
"Only at the leaves"
],
correctAnswer: 1,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which data structure is used to efficiently implement a set of disjoint sets?",
options: [
"Disjoint Set Union",
"Stack",
"Queue",
"Trie"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which optimization is commonly used with Disjoint Set Union?",
options: [
"Path Compression",
"Binary Search",
"Heap Sort",
"Bubble Sort"
],
correctAnswer: 0,
},

{
courseId: "btech",
subjectId: "data-structures",
category: "Data Structures",
difficulty: "Hard",
question: "Which additional optimization is commonly paired with path compression in DSU?",
options: [
"Union by Rank",
"Linear Search",
"Bubble Sort",
"Tree Traversal"
],
correctAnswer: 0,
},


  // =====================================================
  // COMPUTER NETWORKS
  // =====================================================
  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "What is a computer network?",
    options: [
      "A collection of interconnected computers",
      "A single computer",
      "A programming language",
      "A database"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "Which device is used to connect different networks?",
    options: [
      "Switch",
      "Router",
      "Hub",
      "Repeater"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "Which device operates primarily at the Data Link layer?",
    options: [
      "Router",
      "Switch",
      "Gateway",
      "Modem"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "What does LAN stand for?",
    options: [
      "Local Area Network",
      "Large Area Network",
      "Logical Area Network",
      "Long Area Network"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "What does WAN stand for?",
    options: [
      "Wide Area Network",
      "Wireless Area Network",
      "Web Area Network",
      "World Area Network"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "Which topology uses a central device?",
    options: [
      "Bus",
      "Ring",
      "Star",
      "Mesh"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "Which topology connects all devices to a single backbone cable?",
    options: [
      "Star",
      "Bus",
      "Ring",
      "Mesh"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "How many layers are present in the OSI reference model?",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "Which is the lowest layer of the OSI model?",
    options: [
      "Data Link",
      "Physical",
      "Network",
      "Transport"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "Which OSI layer is responsible for routing?",
    options: [
      "Physical",
      "Data Link",
      "Network",
      "Transport"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "Which OSI layer provides end-to-end communication?",
    options: [
      "Network",
      "Transport",
      "Session",
      "Presentation"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "Which protocol is connection-oriented?",
    options: [
      "UDP",
      "IP",
      "TCP",
      "ICMP"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "Which protocol is connectionless?",
    options: [
      "TCP",
      "UDP",
      "FTP",
      "HTTP"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "What is the default port number of HTTP?",
    options: [
      "20",
      "21",
      "80",
      "443"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "What is the default port number of HTTPS?",
    options: [
      "25",
      "53",
      "80",
      "443"
    ],
    correctAnswer: 3,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "Which protocol is used to translate domain names into IP addresses?",
    options: [
      "FTP",
      "DNS",
      "SMTP",
      "ARP"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "What does DNS stand for?",
    options: [
      "Domain Name System",
      "Data Network Service",
      "Digital Name Service",
      "Domain Network System"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "Which protocol is used to transfer files?",
    options: [
      "FTP",
      "DNS",
      "ARP",
      "ICMP"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "Which protocol is mainly used for sending email?",
    options: [
      "FTP",
      "SMTP",
      "HTTP",
      "SNMP"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "Which protocol is used to map an IP address to a MAC address?",
    options: [
      "RARP",
      "ARP",
      "DNS",
      "DHCP"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "Which protocol dynamically assigns IP addresses to devices?",
    options: [
      "DNS",
      "DHCP",
      "FTP",
      "SMTP"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "What is the size of an IPv4 address?",
    options: [
      "16 bits",
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "What is the size of an IPv6 address?",
    options: [
      "32 bits",
      "64 bits",
      "128 bits",
      "256 bits"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "Which address is physically assigned to a network interface?",
    options: [
      "IP address",
      "MAC address",
      "Port number",
      "Domain name"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "What does MAC stand for?",
    options: [
      "Media Access Control",
      "Machine Access Code",
      "Media Address Code",
      "Memory Access Control"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "Which protocol is used by the ping command?",
    options: [
      "TCP",
      "UDP",
      "ICMP",
      "ARP"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "Which device regenerates signals to extend network distance?",
    options: [
      "Router",
      "Repeater",
      "Switch",
      "Gateway"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "Which layer of the OSI model is responsible for framing?",
    options: [
      "Physical",
      "Data Link",
      "Network",
      "Transport"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "Which layer of the OSI model is responsible for encryption and compression?",
    options: [
      "Session",
      "Transport",
      "Presentation",
      "Application"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "computer-networks",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "Which protocol is commonly used for secure remote login?",
    options: [
      "FTP",
      "Telnet",
      "SSH",
      "HTTP"
    ],
    correctAnswer: 2,
  },
 // =====================================================
  // APTITUDE
  // =====================================================
  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is 25% of 200?",
    options: ["25", "40", "50", "75"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is the average of 10, 20 and 30?",
    options: ["15", "20", "25", "30"],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Easy",
    question: "If 5 pens cost ₹50, what is the cost of 1 pen?",
    options: ["₹5", "₹10", "₹15", "₹20"],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is the simple interest on ₹1000 at 10% per annum for 2 years?",
    options: ["₹100", "₹150", "₹200", "₹250"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Easy",
    question: "A train travels 120 km in 2 hours. What is its speed?",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Easy",
    question: "If x + 5 = 12, what is x?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is the ratio of 20 to 30 in simplest form?",
    options: ["1:2", "2:3", "3:2", "2:5"],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is 15 × 8?",
    options: ["100", "110", "120", "130"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is the square of 15?",
    options: ["125", "200", "225", "250"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is the HCF of 12 and 18?",
    options: ["2", "3", "6", "9"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Easy",
    question: "What is the LCM of 4 and 6?",
    options: ["8", "10", "12", "24"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "A number is increased by 20%. If the original number is 100, what is the new number?",
    options: ["110", "115", "120", "125"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "A number is decreased by 10%. If the original number is 500, what is the new number?",
    options: ["440", "450", "460", "490"],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "A shopkeeper buys an item for ₹500 and sells it for ₹600. What is the profit percentage?",
    options: ["10%", "15%", "20%", "25%"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "An item is sold for ₹800 at a loss of 20%. What was its cost price?",
    options: ["₹900", "₹950", "₹1000", "₹1100"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "A can complete a work in 10 days. What fraction of the work does A complete in one day?",
    options: ["1/5", "1/10", "1/15", "1/20"],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "If 6 workers complete a work in 10 days, how many worker-days are required?",
    options: ["50", "60", "70", "80"],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "A man walks at 5 km/h. How much time will he take to cover 20 km?",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "If a car travels at 60 km/h for 3 hours, what distance does it cover?",
    options: ["120 km", "150 km", "180 km", "200 km"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "The average of five numbers is 20. What is their total?",
    options: ["50", "80", "100", "120"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "The average of 4 numbers is 25. If a fifth number 30 is added, what is the new average?",
    options: ["25", "26", "27", "28"],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "If 3x = 24, what is x?",
    options: ["6", "8", "9", "12"],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "If x/4 = 5, what is x?",
    options: ["10", "15", "20", "25"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "What is the probability of getting a head when a fair coin is tossed once?",
    options: ["0", "1/4", "1/2", "1"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "What is the probability of getting a 6 when a fair die is rolled?",
    options: ["1/2", "1/3", "1/6", "1/12"],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "How many ways can 3 different books be arranged on a shelf?",
    options: ["3", "6", "9", "12"],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "What is the next number in the series 2, 4, 8, 16, ?",
    options: ["20", "24", "30", "32"],
    correctAnswer: 3,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Medium",
    question: "What is the next number in the series 5, 10, 15, 20, ?",
    options: ["22", "25", "30", "35"],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Hard",
    question: "A sum of money becomes ₹1200 in 2 years at simple interest of 10% per annum. What is the principal?",
    options: ["₹900", "₹1000", "₹1100", "₹1200"],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "aptitude",
    category: "Aptitude",
    difficulty: "Hard",
    question: "A and B can complete a work in 12 and 18 days respectively. How many days will they take together?",
    options: ["6.2 days", "7.2 days", "8 days", "9 days"],
    correctAnswer: 1,
  },
  // =====================================================
  // ECE CORE
  // =====================================================
  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "What does ECE stand for?",
    options: [
      "Electrical and Computer Engineering",
      "Electronics and Communication Engineering",
      "Electronic Computer Electronics",
      "Electrical Communication Engineering"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "Which component is used to amplify electrical signals?",
    options: [
      "Resistor",
      "Capacitor",
      "Transistor",
      "Inductor"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "What is the SI unit of resistance?",
    options: [
      "Volt",
      "Ampere",
      "Ohm",
      "Watt"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "What is the SI unit of capacitance?",
    options: [
      "Henry",
      "Farad",
      "Ohm",
      "Tesla"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "What is the SI unit of inductance?",
    options: [
      "Farad",
      "Henry",
      "Ohm",
      "Weber"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "Ohm's law is represented by which equation?",
    options: [
      "V = IR",
      "P = VI",
      "Q = CV",
      "F = ma"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "Which semiconductor material is commonly used in electronic devices?",
    options: [
      "Copper",
      "Silicon",
      "Aluminium",
      "Iron"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "A diode primarily allows current to flow in:",
    options: [
      "Both directions equally",
      "One direction",
      "No direction",
      "Random direction"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "What is the main function of a PN junction diode?",
    options: [
      "Rectification",
      "Amplification",
      "Oscillation",
      "Memory storage"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "Which diode is commonly used for voltage regulation?",
    options: [
      "LED",
      "Photodiode",
      "Zener diode",
      "Tunnel diode"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "LED stands for:",
    options: [
      "Light Emitting Diode",
      "Low Energy Device",
      "Light Electronic Device",
      "Linear Emitting Diode"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "A transistor has how many terminals?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "The three terminals of a BJT are:",
    options: [
      "Gate, Source, Drain",
      "Emitter, Base, Collector",
      "Anode, Cathode, Gate",
      "Input, Output, Ground"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "The three terminals of a MOSFET are commonly identified as:",
    options: [
      "Emitter, Base, Collector",
      "Gate, Source, Drain",
      "Anode, Cathode, Gate",
      "Base, Drain, Collector"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "Which transistor configuration is commonly used for voltage amplification?",
    options: [
      "Common emitter",
      "Common collector",
      "Common base",
      "Common gate"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "What is the full form of FET?",
    options: [
      "Field Effect Transistor",
      "Frequency Effect Transistor",
      "Field Electronic Tube",
      "Fast Electronic Transistor"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "What does MOSFET stand for?",
    options: [
      "Metal Oxide Semiconductor Field Effect Transistor",
      "Metal Output Semiconductor Field Electronic Transistor",
      "Maximum Oxide Semiconductor Field Effect Transistor",
      "Metal Oxide Signal Field Effect Transistor"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "An operational amplifier is commonly known as:",
    options: [
      "Op-amp",
      "Oscillator",
      "Rectifier",
      "Regulator"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "An ideal operational amplifier has:",
    options: [
      "Zero input impedance",
      "Infinite input impedance",
      "Zero voltage gain",
      "Infinite output impedance"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "Which circuit converts AC into DC?",
    options: [
      "Oscillator",
      "Rectifier",
      "Amplifier",
      "Filter"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "Which component is mainly used for filtering unwanted AC components?",
    options: [
      "Diode",
      "Filter circuit",
      "Transistor",
      "Switch"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "What is the purpose of an oscillator?",
    options: [
      "Generate periodic signals",
      "Convert AC to DC",
      "Store data",
      "Measure resistance"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "Which device converts an analog signal into a digital signal?",
    options: [
      "DAC",
      "ADC",
      "Amplifier",
      "Oscillator"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "Which device converts a digital signal into an analog signal?",
    options: [
      "ADC",
      "DAC",
      "Rectifier",
      "Comparator"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "What does ADC stand for?",
    options: [
      "Analog to Digital Converter",
      "Automatic Digital Controller",
      "Analog Data Controller",
      "Advanced Digital Converter"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Easy",
    question: "What does DAC stand for?",
    options: [
      "Digital to Analog Converter",
      "Data Analog Controller",
      "Digital Automatic Converter",
      "Direct Analog Controller"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "What is the basic unit of frequency?",
    options: [
      "Volt",
      "Hertz",
      "Ohm",
      "Watt"
    ],
    correctAnswer: 1,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "The frequency of a signal is 1 kHz. What is its period?",
    options: [
      "1 ms",
      "10 ms",
      "100 ms",
      "1 second"
    ],
    correctAnswer: 0,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "Which modulation technique varies the amplitude of the carrier signal?",
    options: [
      "FM",
      "PM",
      "AM",
      "PCM"
    ],
    correctAnswer: 2,
  },

  {
    courseId: "btech",
    subjectId: "ece-core",
    category: "ECE Core",
    difficulty: "Medium",
    question: "Which modulation technique varies the frequency of the carrier signal?",
    options: [
      "AM",
      "FM",
      "PM",
      "ASK"
    ],
    correctAnswer: 1,
  }
];

// =====================================================
// PART 8 END — ECE CORE
// =====================================================
const seedQuestions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    await Question.deleteMany({
      courseId: "btech",
    });

    await Question.insertMany(questions);

    console.log(
      `✅ ${questions.length} questions added successfully`
    );

    await mongoose.disconnect();

    console.log("✅ Database connection closed");
  } catch (error) {
    console.error("❌ Seed Error:", error.message);
    process.exit(1);
  }
};

seedQuestions();