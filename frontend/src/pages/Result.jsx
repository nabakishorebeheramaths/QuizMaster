import React, { useEffect } from "react";
import axios from "axios";
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


  useEffect(() => {

    const saveQuizAttempt = async () => {

      try {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user?._id) {
          console.log("User not found");
          return;
        }


        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/quiz/submit`,
          {
            user: user._id,
            score: score,
            totalQuestions: totalQuestions,
            answers: []
          }
        );


        console.log("Quiz Saved:", res.data);


      } catch(error) {

        console.log(
          "Quiz Save Error:",
          error.response?.data || error.message
        );

      }

    };


    saveQuizAttempt();

  }, []);



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
            <h3>{totalQuestions - score}</h3>
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