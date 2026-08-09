import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-card">

        {/* HERO */}
        <div className="about-hero">
          <div className="about-icon">🚀</div>

          <h1>About QuizMaster</h1>

          <p>
            India's Smart Quiz Platform for GATE, Placements and
            Competitive Exam Preparation.
          </p>

          <div className="about-badges">
            <span>🎓 Learn</span>
            <span>🧠 Practice</span>
            <span>🏆 Compete</span>
          </div>
        </div>

        <div className="about-divider" />

        {/* MISSION */}
        <section className="about-section">
          <div className="section-icon">🎯</div>

          <div>
            <h2>Our Mission</h2>

            <p>
              QuizMaster is dedicated to helping students prepare for GATE,
              placements, aptitude tests, reasoning, engineering mathematics,
              and competitive examinations through high-quality daily
              quizzes. Our mission is to make learning simple, engaging,
              and accessible for everyone.
            </p>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="about-section">
          <div className="section-icon">⭐</div>

          <div className="about-content">
            <h2>What We Offer</h2>

            <div className="offer-grid">
              <div className="offer-item">
                <span>📘</span>
                <p>Daily Quiz with 30 Questions</p>
              </div>

              <div className="offer-item">
                <span>⚡</span>
                <p>GATE Level ECE Questions</p>
              </div>

              <div className="offer-item">
                <span>🧠</span>
                <p>Aptitude & Reasoning</p>
              </div>

              <div className="offer-item">
                <span>📐</span>
                <p>Engineering Mathematics</p>
              </div>

              <div className="offer-item">
                <span>📰</span>
                <p>Current Affairs</p>
              </div>

              <div className="offer-item">
                <span>📈</span>
                <p>Performance Analysis</p>
              </div>

              <div className="offer-item">
                <span>🏆</span>
                <p>Daily Leaderboard</p>
              </div>

              <div className="offer-item">
                <span>📱</span>
                <p>Mobile Friendly Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY QUIZMASTER */}
        <section className="about-section">
          <div className="section-icon">💡</div>

          <div>
            <h2>Why QuizMaster?</h2>

            <p>
              Every registered user receives the same set of daily quiz
              questions, ensuring fairness and healthy competition.
              QuizMaster focuses on improving concepts through consistent
              practice rather than rote memorization.
            </p>
          </div>
        </section>

        {/* VISION */}
        <section className="about-section">
          <div className="section-icon">🌍</div>

          <div>
            <h2>Our Vision</h2>

            <p>
              Our vision is to become one of India's most trusted online quiz
              platforms for engineering students and competitive exam
              aspirants by delivering quality educational content every day.
            </p>
          </div>
        </section>

        {/* CREATOR */}
        <section className="about-highlight">
          <div className="highlight-header">
            <span>👨‍💻</span>
            <h2>About the Creator</h2>
          </div>

          <p>
            Hello! I'm <strong>Nabakishore Behera</strong>, the creator of
            <strong> QuizMaster</strong>. I am a B.Tech Electronics and
            Communication Engineering (ECE) student who enjoys software
            development and building educational platforms.
          </p>

          <p>
            I created QuizMaster to help students prepare for GATE,
            placements, aptitude, reasoning, engineering mathematics, and
            current affairs through daily practice quizzes. My goal is to
            make learning more interactive, engaging, and accessible.
          </p>

          <p>
            📍 I am from{" "}
            <strong>Mitrapur, Balasore, Odisha, India</strong>. Through
            QuizMaster, I hope to support students across the country in
            improving their knowledge and achieving their academic and
            career goals.
          </p>
        </section>

        {/* CONTACT */}
        <section className="about-highlight contact-highlight">
          <div className="highlight-header">
            <span>📩</span>
            <h2>Contact Information</h2>
          </div>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <small>Email</small>
              <strong>nabakishorebehera57@gmail.com</strong>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <small>Location</small>
              <strong>Mitrapur, Balasore, Odisha, India</strong>
            </div>
          </div>

          <p className="thank-you">
            Thank you for visiting <strong>QuizMaster</strong>. We appreciate
            your support and wish you success in your learning journey. ❤️
          </p>
        </section>

        {/* FINAL MESSAGE */}
        <div className="about-footer-message">
          <span>🧠</span>
          <h3>Learn More. Practice More. Achieve More.</h3>
          <p>
            Start your quiz journey with QuizMaster and keep improving every
            day.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;