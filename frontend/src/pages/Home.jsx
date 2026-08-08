
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <span className="badge">
          🚀 India's Smart Quiz Platform
        </span>

        <h1 className="rainbow-text">
          Learn Faster.{" "}
          <br />
          Play Smarter.
        </h1>

        <p>
          Quiz for everyone — from{" "}
          <strong className="rainbow-inline">
            Class 1 to 12
          </strong>{" "}
          and competitive exams across all major sectors like{" "}
          <strong className="rainbow-inline">
            JEE, NEET, GATE
          </strong>{" "}
          and many more.
        </p>

        <p className="creator rainbow-text">
          Created by Nabakishore Behera
        </p>

      </div>

      <div className="hero-right">

        <div className="card">

          <div className="emoji">
            🧠
          </div>

          <h2 className="rainbow-text">
            Quiz Master
          </h2>

          <p>
            Challenge yourself with hundreds of exciting quizzes
            designed for school students, college students and
            competitive exam aspirants.
          </p>

          <div className="info">

            <div>
              <h3 className="rainbow-text">1000+</h3>
              <small>Questions</small>
            </div>

            <div>
              <h3 className="rainbow-text">10+</h3>
              <small>Categories</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
