
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import Result from "./Result";

import "./Quiz.css";

const API_URL = import.meta.env.VITE_API_URL;

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // COURSE / SUBJECT INFORMATION
  // =====================================================

  const quizInfo = {
    courseId: location.state?.courseId || null,
    courseName: location.state?.courseName || null,
    subject: location.state?.subject || null,
    subjectId: location.state?.subjectId || null,
    quizType: location.state?.quizType || "daily",
  };

  // =====================================================
  // STATES
  // =====================================================

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [timeLeft, setTimeLeft] = useState(30);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  // =====================================================
  // FETCH QUESTIONS
  // =====================================================

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      setLoading(true);

      setQuestions([]);
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer(null);
      setAnswers([]);
      setShowResult(false);
      setTimeLeft(30);

      let response;

      // =================================================
      // DAILY LIVE QUIZ
      // =================================================

      if (quizInfo.quizType === "daily") {
        response = await axios.get(
          `${API_URL}/daily-quiz/today`
        );

        console.log("DAILY QUIZ:", response.data);
      }

      // =================================================
      // SUBJECT / COURSE QUIZ
      // =================================================

      else {
        response = await axios.get(
          `${API_URL}/questions`,
          {
            params: {
              courseId: quizInfo.courseId,
              courseName: quizInfo.courseName,
              subject: quizInfo.subject,
              subjectId: quizInfo.subjectId,
              quizType: quizInfo.quizType,
            },
          }
        );

        console.log(
          "SUBJECT QUIZ:",
          response.data
        );
      }

      // =================================================
      // HANDLE DIFFERENT API RESPONSE FORMATS
      // =================================================

      const fetchedQuestions =
        response.data?.questions ||
        response.data?.data ||
        response.data ||
        [];

      if (Array.isArray(fetchedQuestions)) {
        setQuestions(fetchedQuestions);
      } else {
        setQuestions([]);
      }
    } catch (error) {
      console.error(
        "Quiz Error:",
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
          "Failed to load questions"
      );

      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // HANDLE ANSWER
  // =====================================================

  const handleAnswer = (index) => {
    // Prevent changing answer after selection
    if (selectedAnswer !== null) {
      return;
    }

    const current =
      questions[currentQuestion];

    if (!current) {
      return;
    }

    // Only store the user's selected option.
    // Correct answer is NOT revealed here.
    setSelectedAnswer(index);

    const answerData = {
      questionId: current._id,
      selectedAnswer: index,
      correctAnswer: current.correctAnswer,
    };

    setAnswers((previousAnswers) => {
      const filtered =
        previousAnswers.filter(
          (item) =>
            item.questionId !== current._id
        );

      return [
        ...filtered,
        answerData,
      ];
    });
  };

  // =====================================================
  // SUBMIT QUIZ TO BACKEND
  // =====================================================

  const submitQuiz = async (
    finalScore,
    finalAnswers
  ) => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (!user?._id) {
        console.error(
          "User not found in localStorage"
        );

        return;
      }

      await axios.post(
        `${API_URL}/quiz/submit`,
        {
          user: user._id,

          userName:
            user.name ||
            user.username ||
            "User",

          score: finalScore,

          totalQuestions:
            questions.length,

          answers: finalAnswers,

          // ==========================================
          // COURSE INFORMATION
          // ==========================================

          courseId:
            quizInfo.courseId,

          courseName:
            quizInfo.courseName,

          subject:
            quizInfo.subject,

          subjectId:
            quizInfo.subjectId,

          quizType:
            quizInfo.quizType,
        }
      );

      console.log(
        "✅ Quiz Saved Successfully"
      );
    } catch (error) {
      console.error(
        "❌ Submit Error:",
        error.response?.data || error
      );
    }
  };

  // =====================================================
  // NEXT QUESTION
  // =====================================================

  const nextQuestion = async () => {
    if (selectedAnswer === null) {
      alert("Please select an answer");
      return;
    }

    const current =
      questions[currentQuestion];

    if (!current) {
      return;
    }

    // =================================================
    // CHECK CURRENT ANSWER
    // =================================================

    let updatedScore = score;

    if (
      selectedAnswer ===
      current.correctAnswer
    ) {
      updatedScore++;
    }

    setScore(updatedScore);

    // =================================================
    // SAVE CURRENT ANSWER
    // =================================================

    const answerData = {
      questionId: current._id,
      selectedAnswer: selectedAnswer,
      correctAnswer: current.correctAnswer,
    };

    const updatedAnswers = [
      ...answers.filter(
        (item) =>
          item.questionId !== current._id
      ),
      answerData,
    ];

    setAnswers(updatedAnswers);

    // =================================================
    // NEXT QUESTION
    // =================================================

    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        (previous) => previous + 1
      );

      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      // =================================================
      // FINAL QUESTION
      // =================================================

      await submitQuiz(
        updatedScore,
        updatedAnswers
      );

      setShowResult(true);
    }
  };

  // =====================================================
  // TIME UP
  // =====================================================

  const handleTimeUp = async () => {
    const current =
      questions[currentQuestion];

    if (!current) {
      return;
    }

    let updatedScore = score;

    // =================================================
    // CHECK ANSWER IF SELECTED
    // =================================================

    if (
      selectedAnswer !== null &&
      selectedAnswer ===
        current.correctAnswer
    ) {
      updatedScore++;
    }

    setScore(updatedScore);

    // =================================================
    // SAVE CURRENT ANSWER
    // =================================================

    let updatedAnswers = [
      ...answers,
    ];

    if (selectedAnswer !== null) {
      const answerData = {
        questionId: current._id,
        selectedAnswer: selectedAnswer,
        correctAnswer:
          current.correctAnswer,
      };

      updatedAnswers = [
        ...answers.filter(
          (item) =>
            item.questionId !==
            current._id
        ),
        answerData,
      ];

      setAnswers(updatedAnswers);
    }

    // =================================================
    // MOVE TO NEXT QUESTION
    // =================================================

    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        (previous) => previous + 1
      );

      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      // =================================================
      // QUIZ FINISHED
      // =================================================

      await submitQuiz(
        updatedScore,
        updatedAnswers
      );

      setShowResult(true);
    }
  };

  // =====================================================
  // RETRY QUIZ
  // =====================================================

  const retryQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setTimeLeft(30);
    setShowResult(false);
    setAnswers([]);

    fetchQuestions();
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="quiz-container">
        <div className="loading-card">
          <h2>Loading Questions...</h2>

          <p>
            Please wait while the quiz
            is being prepared.
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // NO QUESTIONS
  // =====================================================

  if (questions.length === 0) {
    return (
      <div className="quiz-container">
        <div className="loading-card">
          <h2>No Questions Found</h2>

          <p>
            {quizInfo.quizType ===
            "subject"
              ? `No questions are currently available for ${
                  quizInfo.subject ||
                  "this subject"
                }.`
              : "Today's quiz is currently unavailable."}
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="submit-btn"
              onClick={fetchQuestions}
            >
              🔄 Try Again
            </button>

            <button
              className="submit-btn"
              onClick={() =>
                navigate(
                  quizInfo.courseId
                    ? `/course/${quizInfo.courseId}`
                    : "/course"
                )
              }
            >
              ← Back to Course
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // RESULT
  // =====================================================

  if (showResult) {
    return (
      <Result
        score={score}
        totalQuestions={
          questions.length
        }
        onRetry={retryQuiz}
      />
    );
  }

  // =====================================================
  // CURRENT QUESTION
  // =====================================================

  const current =
    questions[currentQuestion];

  // =====================================================
  // QUIZ UI
  // =====================================================

  return (
    <div className="quiz-container">

      {/* =============================================
          COURSE / SUBJECT INFORMATION
      ============================================= */}

      {quizInfo.courseName && (
        <div className="quiz-context">
          <span>
            🎓 {quizInfo.courseName}
          </span>

          {quizInfo.subject && (
            <span>
              📚 {quizInfo.subject}
            </span>
          )}
        </div>
      )}

      {/* =============================================
          QUIZ TYPE
      ============================================= */}

      <div className="quiz-type">
        {quizInfo.quizType ===
        "subject"
          ? "📚 Subject Quiz"
          : "🟢 Daily Live Quiz"}
      </div>

      {/* =============================================
          TIMER
      ============================================= */}

      <Timer
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        onTimeUp={handleTimeUp}
      />

      {/* =============================================
          QUESTION CARD
      ============================================= */}

      <div className="question-card">

        <h2>
          Question{" "}
          {currentQuestion + 1}{" "}
          / {questions.length}
        </h2>

        <QuestionCard
          question={current}
          onAnswer={handleAnswer}
          selectedAnswer={
            selectedAnswer
          }
        />

        {/* =========================================
            NEXT / FINISH BUTTON
        ========================================= */}

        <button
          type="button"
          className="submit-btn"
          onClick={nextQuestion}
        >
          {currentQuestion ===
          questions.length - 1
            ? "Finish Quiz"
            : "Next Question →"}
        </button>

      </div>
    </div>
  );
}

export default Quiz;
