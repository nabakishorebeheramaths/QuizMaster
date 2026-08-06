import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [quizCompleted, setQuizCompleted] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchHistory = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/quiz/history/${user._id}`
        );

        const history = res.data;

        setQuizCompleted(history.length);

        if (history.length > 0) {
          const highest = Math.max(
            ...history.map((item) => item.score)
          );

          setBestScore(highest);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchHistory();
  }, [navigate]);

  return (
    <section className="dashboard">

      <div className="dashboard-header">

        <div>
          <h1>Welcome, {user?.name || "Guest"} 👋</h1>
          <p>Ready to test your knowledge today?</p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => navigate("/quiz")}>
            Start Quiz 🚀
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>

      </div>

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

      <h2 className="title">Choose Category</h2>

      <div className="categories">

        <div className="category-card">
          <span>🧠</span>
          <h3>General Knowledge</h3>
          <p>Test your awareness</p>
        </div>

        <div className="category-card">
          <span>💻</span>
          <h3>Programming</h3>
          <p>Coding & technology</p>
        </div>

        <div className="category-card">
          <span>🔬</span>
          <h3>Science</h3>
          <p>Explore discoveries</p>
        </div>

        <div className="category-card">
          <span>⚡</span>
          <h3>Electronics</h3>
          <p>ECE & innovation</p>
        </div>

      </div>

    </section>
  );
}

export default Dashboard;