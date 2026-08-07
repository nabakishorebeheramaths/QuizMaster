import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [quizCompleted, setQuizCompleted] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [dailyQuiz, setDailyQuiz] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    // Fetch Quiz History
    const fetchHistory = async () => {

      try {

        if (!user?._id) return;

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/quiz/history/${user._id}`
        );

        const history = res.data.attempts || [];

        setQuizCompleted(history.length);

        if (history.length > 0) {

          const maxScore = Math.max(
            ...history.map(item => item.percentage || 0)
          );

          setBestScore(Math.round(maxScore));

        } else {

          setBestScore(0);

        }

      } catch (error) {

        console.log("History Error:", error);

      }

    };

    // Fetch Daily Quiz
    const fetchDailyQuiz = async () => {

      try {

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/dailyquiz/today`
        );

        console.log("DAILY QUIZ:", res.data);

        setDailyQuiz(res.data);

      } catch (error) {

        console.log("Daily Quiz Error:", error);

      }

    };
    const fetchLeaderboard = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/quiz/leaderboard`
    );

    setLeaderboard(res.data.leaderboard || []);
  } catch (error) {
    console.log("Leaderboard Error:", error);
  }
};

    fetchHistory();
    fetchDailyQuiz();
    fetchLeaderboard();

  }, [navigate]);

  return (

    <section className="dashboard">

      {/* Header */}

      <div className="dashboard-header">

        <div>

          <h1>
            Welcome, {user?.name || "Guest"} 👋
          </h1>

          <p>
            Ready to test your knowledge today?
          </p>

        </div>

        <div style={{ display: "flex", gap: "12px" }}>

          <button onClick={() => navigate("/quiz")}>
            🚀 Start Quiz
          </button>

          <button
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </button>

        </div>

      </div>

      {/* LIVE QUIZ CARD */}

      <div className="live-quiz-card">

        <div className="live-header">

          <h2>🔥 Daily Live Quiz</h2>

          <span className="live-badge">
            🟢 LIVE
          </span>

        </div>

        {
          dailyQuiz ? (

            <>

              <div className="quiz-info">

                <div className="info-box">
                  <h4>📅 Date</h4>
                  <p>{dailyQuiz.date}</p>
                </div>

                <div className="info-box">
                  <h4>⏰ Start Time</h4>
                  <p>
                    {new Date(dailyQuiz.startTime).toLocaleString(
                      "en-IN",
                      {
                        timeZone: "Asia/Kolkata",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }
                    )}
                  </p>
                </div>

                <div className="info-box">
                  <h4>🏁 End Time</h4>
                  <p>
                    {new Date(dailyQuiz.endTime).toLocaleString(
                      "en-IN",
                      {
                        timeZone: "Asia/Kolkata",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }
                    )}
                  </p>
                </div>

                <div className="info-box">
                  <h4>📝 Questions</h4>
                  <p>{dailyQuiz.questions?.length || 0}</p>
                </div>

              </div>

              <div className="quiz-status">

                <h3>
                  Today's Challenge is Ready 🚀
                </h3>

                <p>
                  Attempt today's quiz and improve your score.
                </p>

                <button
                  onClick={() => navigate("/quiz")}
                >
                  🚀 Start Live Quiz
                </button>

              </div>

                       </>

          ) : (

  <>

    <div className="quiz-info">

      <div className="info-box">
        <h4>📅 Date</h4>
        <p>{new Date().toLocaleDateString("en-IN")}</p>
      </div>

      <div className="info-box">
        <h4>⏰ Start</h4>
        <p>12:00 AM</p>
      </div>

      <div className="info-box">
        <h4>🏁 End</h4>
        <p>11:59 PM</p>
      </div>

      <div className="info-box">
        <h4>📝 Questions</h4>
        <p>30</p>
      </div>

    </div>

    <div className="quiz-status">

      <h3>Loading Today's Quiz...</h3>

      <p>Please wait while today's quiz is being prepared.</p>

    </div>

  </>

)
        }

      </div>

      {/* STATS */}

      <div className="stats-card">

        <div>
          <h2>1000+</h2>
          <p>Questions</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Categories</p>
        </div>

        <div>
          <h2>{quizCompleted}</h2>
          <p>Quiz Completed</p>
        </div>

        <div>
          <h2>{bestScore}%</h2>
          <p>Best Score</p>
        </div>

      </div>
     {/* TODAY'S TOP PERFORMERS */}

<h2 className="title">🏆 Today's Top Performers</h2>

<div className="leaderboard">

  <div className="leaderboard-header">
    <span>Rank</span>
    <span>Name</span>
    <span>Score</span>
  </div>

  {leaderboard.length > 0 ? (

    leaderboard.map((item, index) => (

      <div className="leaderboard-row" key={item._id}>

        <span className="rank">
          {index === 0
            ? "🥇"
            : index === 1
            ? "🥈"
            : index === 2
            ? "🥉"
            : index + 1}
        </span>

        <span className="name">
          {item.userName}
        </span>

        <span className="score">
          {item.percentage}%
        </span>

      </div>

    ))

  ) : (

    <p style={{ textAlign: "center", padding: "20px" }}>
      No participants today.
    </p>

  )}


</div>
            {/* CATEGORY */}

      <h2 className="title">
        Choose Category
      </h2>

      <div className="categories">

        <div
          className="category-card"
          onClick={() => navigate("/quiz")}
        >
          <span>🧠</span>
          <h3>General Knowledge</h3>
          <p>Test your awareness</p>
        </div>

        <div
          className="category-card"
          onClick={() => navigate("/quiz")}
        >
          <span>💻</span>
          <h3>Programming</h3>
          <p>Coding & Technology</p>
        </div>

        <div
          className="category-card"
          onClick={() => navigate("/quiz")}
        >
          <span>🔬</span>
          <h3>Science</h3>
          <p>Explore discoveries</p>
        </div>

        <div
          className="category-card"
          onClick={() => navigate("/quiz")}
        >
          <span>⚡</span>
          <h3>Electronics</h3>
          <p>ECE & Innovation</p>
        </div>

      </div>

    </section>

  );

}

export default Dashboard;