import React from "react";
import "./Result.css";

function Result({ score, totalQuestions, onRetry }) {

  const percentage = Math.round((score / totalQuestions) * 100);

  let message = "";
  let status = "";

  if (percentage >= 80) {
    message = "Excellent Performance! 🔥";
    status = "PASS";
  } else if (percentage >= 50) {
    message = "Good Job! Keep Improving 🚀";
    status = "PASS";
  } else {
    message = "Keep Practicing! You Can Do Better 💪";
    status = "TRY AGAIN";
  }

  return (
    <div className="result-container">

      <div className="result-card">

        <h1>Quiz Completed 🎉</h1>

        <div className="score-circle">
          <span>{percentage}%</span>
        </div>

        <h2 className={status === "PASS" ? "pass" : "fail"}>
          {status}
        </h2>

        <p className="message">
          {message}
        </p>


        <div className="stats">

          <div className="stat-box">
            <h3>{score}</h3>
            <p>Correct</p>
          </div>

          <div className="stat-box">
            <h3>{totalQuestions-score}</h3>
            <p>Wrong</p>
          </div>

          <div className="stat-box">
            <h3>{totalQuestions}</h3>
            <p>Total</p>
          </div>

        </div>


        <button 
          className="retry-btn"
          onClick={onRetry}
        >
          🔄 Retry Quiz
        </button>


      </div>

    </div>
  );
}

export default Result;