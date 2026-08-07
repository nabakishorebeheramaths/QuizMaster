import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("MY LOGIN USER:", user);
  const [quizCompleted, setQuizCompleted] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [dailyQuiz, setDailyQuiz] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

useEffect(() => {

  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(timer);

}, []);

const formatTime = (date) => {
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const getTimeLeft = () => {

  const now = currentTime;

  const start = new Date(now);
  start.setHours(0, 0, 0, 0);

  const end = new Date(now);
  end.setHours(23, 59, 59, 999);

  if (now < start) {

    const diff = start - now;

    const hrs = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return {
      status: "Starts in",
      color: "#16a34a",
      time: `${hrs}h ${mins}m`
    };

  }

  if (now <= end) {

    const diff = end - now;

    const hrs = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return {
      status: "Ends in",
      color: "#ef4444",
      time: `${hrs}h ${mins}m`
    };

  }

  return {
    status: "Quiz Ended",
    color: "#6b7280",
    time: ""
  };

};

const timerInfo = getTimeLeft();
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
          `${import.meta.env.VITE_API_URL}/daily-quiz/today`
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
const fetchUserRank = async () => {

  try {

    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/quiz/rank/${user._id}`
    );

    setUserRank(res.data.rank);

  } catch(error){

    console.log("Rank Error:", error);

  }

};
    fetchHistory();
    fetchDailyQuiz();
    fetchLeaderboard();
    fetchUserRank();

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
            <p>{dailyQuiz?.date || new Date().toLocaleDateString("en-IN")}</p>
          </div>

          <div className="info-box">
            <h4>⏰ Start Time</h4>
            <p>12:00 AM</p>

            <small
              style={{
                color: "#16a34a",
                fontWeight: "600",
                display: "block",
                marginTop: "8px"
              }}
            >
              🕒 Quiz Starts Every Day
            </small>
          </div>

          <div className="info-box">
            <h4>🏁 End Time</h4>
            <p>11:59 PM</p>

            <small
              style={{
                color: "#ef4444",
                fontWeight: "600",
                display: "block",
                marginTop: "8px"
              }}
            >
              ⏳ {timerInfo.time} Remaining
            </small>
          </div>

          <div className="info-box">
            <h4>📝 Questions</h4>
            <p>{dailyQuiz?.questions?.length || 30}</p>

            <small
              style={{
                color: "#6b7280",
                fontWeight: "600",
                display: "block",
                marginTop: "8px"
              }}
            >
              All Subjects
            </small>
          </div>

        </div>

        <div className="quiz-status">

          <h3>Today's Challenge is Ready 🚀</h3>

          <p>
            {timerInfo.status} {timerInfo.time}
          </p>

          <button onClick={() => navigate("/quiz")}>
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


  {
  userRank && (
    <h3 className="your-rank">
      🏆 Your Rank: #{userRank}
    </h3>
  )
}

     {/* TODAY'S TOP PERFORMERS */}

<h2 className="title">🏆 Today's Top Performers</h2>

<div className="leaderboard">

  <div className="leaderboard-header">
    <span>Rank</span>
    <span>Name</span>
    <span>Score</span>
  </div>

  {leaderboard.length > 0 ? (

  leaderboard.map((item,index)=>{

    console.log("ITEM USER ID:", item.user?._id);
    console.log("MY USER ID:", user?._id);

    return (

      <div
        key={item._id}
        className={
          String(item.user?._id) === String(user?._id)
          ? "leaderboard-row my-rank"
          : "leaderboard-row"
        }
      >

        <span className="rank">
          {index + 1}
        </span>

        <span className="name">
          {item.user?.name || item.userName}
        </span>

        <span className="score">
          {item.percentage}%
        </span>

      </div>

    );

  })

) : (

  <p>No participants today.</p>

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