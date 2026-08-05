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

        <h1>
          Learn Faster.
          <br />
          <span>Play Smarter.</span>
        </h1>

        <p>
          Improve your knowledge with interactive quizzes,
          beautiful design, real-time scores and an exciting
          learning experience.
        </p>

        <div className="creator">
          Created by <span>Nabakishore Behera</span>
        </div>
  
  
      </div>


      <div className="hero-right">

        <div className="card">

          <div className="emoji">
            🧠
          </div>

          <h2>
            Quiz Master
          </h2>

          <p>
            Challenge yourself with hundreds of exciting quizzes.
          </p>


          <div className="info">

            <div>
              <h3>1000+</h3>
              <small>Questions</small>
            </div>


            <div>
              <h3>10+</h3>
              <small>Categories</small>
            </div>

          </div>

        </div>

      </div>


    </section>
  );
}

export default Home;