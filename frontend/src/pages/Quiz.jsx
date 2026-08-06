import React, { useState, useEffect } from "react";
import axios from "axios";

import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import Result from "./Result";

import "./Quiz.css";

const API_URL = import.meta.env.VITE_API_URL;

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [timeLeft, setTimeLeft] = useState(30);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get(`${API_URL}/questions`);
      setQuestions(res.data.questions || []);
    } catch (error) {
      console.error(error);
      alert("Failed to load questions");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (index) => {
    setSelectedAnswer(index);

    const current = questions[currentQuestion];

    const answerData = {
      questionId: current._id,
      selectedAnswer: index,
      correctAnswer: current.correctAnswer,
    };

    setAnswers((prev) => {
      const filtered = prev.filter(
        (item) => item.questionId !== current._id
      );

      return [...filtered, answerData];
    });
  };

  const submitQuiz = async (finalScore) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await axios.post(`${API_URL}/quiz/submit`, {
        user: user._id,
        score: finalScore,
        totalQuestions: questions.length,
        answers,
      });

      console.log("Quiz Saved:", res.data);
    } catch (error) {
      console.error("Submit Error:", error.response?.data || error);
    }
  };

  const nextQuestion = async () => {
    if (selectedAnswer === null) {
      alert("Please select an answer");
      return;
    }

    let updatedScore = score;

    if (
      selectedAnswer === questions[currentQuestion].correctAnswer
    ) {
      updatedScore++;
      setScore(updatedScore);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      await submitQuiz(updatedScore);

      setScore(updatedScore);
      setShowResult(true);
    }
  };

  const retryQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setTimeLeft(30);
    setShowResult(false);
    setAnswers([]);
  };

  if (loading) {
    return <h2>Loading Questions...</h2>;
  }

  if (questions.length === 0) {
    return <h2>No Questions Found</h2>;
  }

  return (
    <div className="quiz-container">
      {showResult ? (
        <Result
          score={score}
          totalQuestions={questions.length}
          onRetry={retryQuiz}
        />
      ) : (
        <>
          <Timer
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
          />

          <div className="question-card">
            <h2>
              Question {currentQuestion + 1} / {questions.length}
            </h2>

            <QuestionCard
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              selectedAnswer={selectedAnswer}
            />

            <button
              className="submit-btn"
              onClick={nextQuestion}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;