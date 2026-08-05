import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();
  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }
}, [navigate]);
  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <section className="dashboard">


      <div className="dashboard-header">

        <div>
          <h1>
  Welcome, {user?.name || "Guest"} 👋
</h1>

          <p>
            Ready to test your knowledge today?
          </p>
        </div>


        <div style={{ display: "flex", gap: "10px" }}>

  <button
    onClick={() => navigate("/quiz")}
  >
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
          <h2>0</h2>
          <p>Quiz Completed</p>
        </div>


        <div>
          <h2>0%</h2>
          <p>Best Score</p>
        </div>


      </div>




      <h2 className="title">
        Choose Category
      </h2>




      <div className="categories">


        <div className="category-card">

          <span>🧠</span>

          <h3>
            General Knowledge
          </h3>

          <p>
            Test your awareness
          </p>

        </div>



        <div className="category-card">

          <span>💻</span>

          <h3>
            Programming
          </h3>

          <p>
            Coding & technology
          </p>

        </div>




        <div className="category-card">

          <span>🔬</span>

          <h3>
            Science
          </h3>

          <p>
            Explore discoveries
          </p>

        </div>




        <div className="category-card">

          <span>⚡</span>

          <h3>
            Electronics
          </h3>

          <p>
            ECE & innovation
          </p>

        </div>



      </div>



    </section>

  );
}


export default Dashboard;