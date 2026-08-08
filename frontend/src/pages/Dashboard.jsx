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
  const [currentTime, setCurrentTime] = useState(new Date());

  // ================================
  // LIVE CLOCK
  // ================================
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ================================
  // TIME LEFT
  // ================================
  const getTimeLeft = () => {
    const now = currentTime;

    const start = new Date(now);
    start.setHours(0, 0, 0, 0);

    const end = new Date(now);
    end.setHours(23, 59, 59, 999);

    if (now < start) {
      const diff = start - now;

      const hrs = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );

      return {
        status: "Starts in",
        color: "#16a34a",
        time: `${hrs}h ${mins}m`,
      };
    }

    if (now <= end) {
      const diff = end - now;

      const hrs = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );

      return {
        status: "Ends in",
        color: "#ef4444",
        time: `${hrs}h ${mins}m`,
      };
    }

    return {
      status: "Quiz Ended",
      color: "#6b7280",
      time: "",
    };
  };

  const timerInfo = getTimeLeft();

  // ================================
  // FETCH DATA
  // ================================
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    // ================================
    // FETCH QUIZ HISTORY
    // ================================
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
            ...history.map((item) => item.percentage || 0)
          );

          setBestScore(Math.round(maxScore));
        } else {
          setBestScore(0);
        }
      } catch (error) {
        console.log("History Error:", error);
      }
    };

    // ================================
    // FETCH DAILY LIVE QUIZ
    // ================================
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

    fetchHistory();
    fetchDailyQuiz();
  }, [navigate]);

  // ================================
  // COURSE / EXAM DATA
  // ================================
  const courses = [
    {
      id: "class-1",
      icon: "📚",
      title: "Class 1",
      description: "Basic learning & knowledge",
    },
    {
      id: "class-2",
      icon: "📖",
      title: "Class 2",
      description: "School learning & practice",
    },
    {
      id: "class-3",
      icon: "✏️",
      title: "Class 3",
      description: "Learning & general knowledge",
    },
    {
      id: "class-4",
      icon: "📘",
      title: "Class 4",
      description: "School subjects & practice",
    },
    {
      id: "class-5",
      icon: "🎒",
      title: "Class 5",
      description: "School quiz & preparation",
    },
    {
      id: "class-6",
      icon: "📗",
      title: "Class 6",
      description: "School subjects & knowledge",
    },
    {
      id: "class-7",
      icon: "📕",
      title: "Class 7",
      description: "Learning & competitive basics",
    },
    {
      id: "class-8",
      icon: "📝",
      title: "Class 8",
      description: "Practice & subject quizzes",
    },
    {
      id: "class-9",
      icon: "🎓",
      title: "Class 9",
      description: "Academic preparation",
    },
    {
      id: "class-10",
      icon: "🏫",
      title: "Class 10",
      description: "Board exam preparation",
    },
    {
      id: "class-11",
      icon: "🔬",
      title: "Class 11",
      description: "Advanced academic preparation",
    },
    {
      id: "class-12",
      icon: "🎯",
      title: "Class 12",
      description: "Board & entrance preparation",
    },
    {
      id: "btech",
      icon: "💻",
      title: "B.Tech",
      description: "Engineering & technical quizzes",
    },
    {
      id: "nursing",
      icon: "🩺",
      title: "Nursing",
      description: "Nursing & healthcare quizzes",
    },
    {
      id: "jee",
      icon: "🚀",
      title: "JEE",
      description: "Engineering entrance preparation",
    },
    {
      id: "neet",
      icon: "🧬",
      title: "NEET",
      description: "Medical entrance preparation",
    },
    {
      id: "competitive",
      icon: "🏆",
      title: "Competitive Exams",
      description: "Government & competitive exams",
    },
  ];

  // ================================
  // LOGOUT
  // ================================
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <section className="dashboard">

      {/* =================================
          HEADER
      ================================= */}
      <div className="dashboard-header">

        <div>
          <h1>
            Welcome, {user?.name || "Guest"} 👋
          </h1>

          <p>
            Ready to test your knowledge today?
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <button onClick={() => navigate("/quiz")}>
            🚀 Start Quiz
          </button>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>

      </div>

      {/* =================================
          LIVE QUIZ
          IMPORTANT: EXISTING LOGIC KEPT
      ================================= */}
      <div className="live-badge">
        🟢 LIVE QUIZ
      </div>

      {dailyQuiz ? (
        <>
          <div className="quiz-info">

            <div className="info-box">
              <h4>📅 Date</h4>

              <p>
                {dailyQuiz?.date ||
                  new Date().toLocaleDateString("en-IN")}
              </p>
            </div>

            <div className="info-box">
              <h4>⏰ Start Time</h4>

              <p>12:00 AM</p>

              <small
                style={{
                  color: "#16a34a",
                  fontWeight: "600",
                  display: "block",
                  marginTop: "8px",
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
                  marginTop: "8px",
                }}
              >
                ⏳ {timerInfo.time} Remaining
              </small>
            </div>

            <div className="info-box">
              <h4>📝 Questions</h4>

              <p>
                {dailyQuiz?.questions?.length || 30}
              </p>

              <small
                style={{
                  color: "#6b7280",
                  fontWeight: "600",
                  display: "block",
                  marginTop: "8px",
                }}
              >
                All Subjects
              </small>
            </div>

          </div>

          <div className="quiz-status">

            <h3>
              Today's Challenge is Ready 🚀
            </h3>

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

              <p>
                {new Date().toLocaleDateString("en-IN")}
              </p>
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

            <h3>
              Loading Today's Quiz...
            </h3>

            <p>
              Please wait while today's quiz is
              being prepared.
            </p>

          </div>
        </>
      )}

      {/* =================================
          STATS
      ================================= */}
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

      {/* =================================
          COURSE & EXAM SECTION
      ================================= */}
      <div className="course-section">

        <div className="section-heading">
          <h2 className="title">
            Choose Your Course / Exam 🎓
          </h2>

          <p>
            Select your course or exam to explore
            quizzes and start your preparation.
          </p>
        </div>

        <div className="categories">

          {courses.map((course) => (
            <div
              key={course.id}
              className="category-card"
              onClick={() =>
                navigate(`/course/${course.id}`)
              }
            >

              <span>
                {course.icon}
              </span>

              <h3>
                {course.title}
              </h3>

              <p>
                {course.description}
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();

                  navigate(`/course/${course.id}`);
                }}
              >
                Explore Quiz →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Dashboard;