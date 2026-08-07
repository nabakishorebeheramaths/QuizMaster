import React from "react";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0F172A 0%,#1E3A8A 45%,#2563EB 100%)",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          margin: "auto",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(15px)",
          borderRadius: "25px",
          padding: "45px",
          color: "#fff",
          boxShadow: "0 15px 40px rgba(0,0,0,.35)",
          border: "1px solid rgba(255,255,255,.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            color: "#FFD700",
            marginBottom: "10px",
          }}
        >
          🚀 About QuizMaster
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#CBD5E1",
            marginBottom: "40px",
          }}
        >
          India's Smart Quiz Platform for GATE, Placements and Competitive
          Exam Preparation.
        </p>

        <h2 style={{ color: "#38BDF8" }}>🎯 Our Mission</h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          QuizMaster is dedicated to helping students prepare for GATE,
          placements, aptitude tests, reasoning, engineering mathematics, and
          competitive examinations through high-quality daily quizzes. Our
          mission is to make learning simple, engaging, and accessible for
          everyone.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          ⭐ What We Offer
        </h2>

        <ul style={{ lineHeight: "2", fontSize: "17px", color: "#E2E8F0" }}>
          <li>📘 Daily Quiz (30 Questions)</li>
          <li>⚡ GATE Level ECE Questions</li>
          <li>🧠 Aptitude & Reasoning</li>
          <li>📐 Engineering Mathematics</li>
          <li>📰 Current Affairs</li>
          <li>📈 Performance Analysis</li>
          <li>🏆 Daily Leaderboard</li>
          <li>📱 Mobile Friendly Experience</li>
        </ul>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          💡 Why QuizMaster?
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          Every registered user receives the same set of daily quiz questions,
          ensuring fairness and healthy competition. QuizMaster focuses on
          improving concepts through consistent practice rather than rote
          memorization.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          🌍 Our Vision
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          Our vision is to become one of India's most trusted online quiz
          platforms for engineering students and competitive exam aspirants by
          delivering quality educational content every day.
        </p>

        {/* About Creator */}

        <div
          style={{
            marginTop: "40px",
            background: "rgba(255,255,255,.08)",
            borderRadius: "18px",
            padding: "25px",
          }}
        >
          <h2 style={{ color: "#FFD700" }}>
            👨‍💻 About the Creator
          </h2>

          <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
            Hello! I'm <strong>Nabakishore Behera</strong>, the creator of
            <strong> QuizMaster</strong>. I am a B.Tech Electronics and
            Communication Engineering (ECE) student who enjoys software
            development and building educational platforms.
          </p>

          <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
            I created QuizMaster to help students prepare for GATE, placements,
            aptitude, reasoning, engineering mathematics, and current affairs
            through daily practice quizzes. My goal is to make learning more
            interactive, engaging, and accessible.
          </p>

          <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
            📍 I am from <strong>Mitrapur, Balasore, Odisha, India</strong>.
            Through QuizMaster, I hope to support students across the country in
            improving their knowledge and achieving their academic and career
            goals.
          </p>
        </div>

        {/* Contact */}

        <div
          style={{
            marginTop: "40px",
            background: "rgba(255,255,255,.08)",
            borderRadius: "18px",
            padding: "25px",
          }}
        >
          <h2 style={{ color: "#FFD700" }}>
            📩 Contact Information
          </h2>

          <p style={{ color: "#E2E8F0" }}>
            📧 <strong>Email:</strong> nabakishorebehera57@gmail.com
          </p>

          <p style={{ color: "#E2E8F0" }}>
            📍 <strong>Location:</strong> Mitrapur, Balasore, Odisha, India
          </p>

          <p style={{ color: "#CBD5E1", marginTop: "15px" }}>
            Thank you for visiting <strong>QuizMaster</strong>. We appreciate
            your support and wish you success in your learning journey. ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;