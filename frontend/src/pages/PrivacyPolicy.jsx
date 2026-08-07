import React from "react";

function PrivacyPolicy() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #2563EB 100%)",
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
          🔒 Privacy Policy
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#CBD5E1",
            fontSize: "17px",
            marginBottom: "35px",
          }}
        >
          Last Updated: August 2026
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#E2E8F0",
            lineHeight: "1.9",
          }}
        >
          Welcome to <strong>QuizMaster</strong>. Your privacy is important to
          us. This Privacy Policy explains what information we collect, how we
          use it, and how we keep it secure while you use our platform.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255,255,255,.2)",
            margin: "35px 0",
          }}
        />

        <h2 style={{ color: "#38BDF8" }}>📌 Information We Collect</h2>

        <ul style={{ lineHeight: "2", fontSize: "17px" }}>
          <li>👤 Name</li>
          <li>📧 Email Address</li>
          <li>🏆 Quiz Scores & Rankings</li>
          <li>🔐 Login Information</li>
          <li>📱 Device & Browser Information</li>
        </ul>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          🎯 How We Use Your Information
        </h2>

        <ul style={{ lineHeight: "2", fontSize: "17px" }}>
          <li>Provide daily quizzes.</li>
          <li>Show leaderboard rankings.</li>
          <li>Improve website performance.</li>
          <li>Protect your account.</li>
          <li>Provide customer support.</li>
        </ul>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          🍪 Cookies
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          QuizMaster may use cookies to improve website functionality, remember
          user preferences, and provide a better browsing experience.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          🌐 Third-Party Services
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          We may use trusted third-party services such as Google AdSense,
          Google Analytics, and authentication providers to improve our
          services.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          🛡 Data Security
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          We use reasonable security measures to protect your personal
          information from unauthorized access, disclosure, or misuse.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          👨‍⚖ Your Rights
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          You may request to update or delete your account information by
          contacting us through the email provided below.
        </p>

        <div
          style={{
            marginTop: "45px",
            background: "rgba(255,255,255,.08)",
            borderRadius: "18px",
            padding: "25px",
          }}
        >
          <h2 style={{ color: "#FFD700" }}>📩 Contact Us</h2>

          <p>Email: <b>nabakishorebehera57@gmail.com</b></p>

          <p style={{ color: "#CBD5E1" }}>
            If you have any questions regarding this Privacy Policy, feel free
            to contact us anytime.
          </p>
        </div>

        <p
          style={{
            marginTop: "40px",
            textAlign: "center",
            color: "#94A3B8",
          }}
        >
          By using <strong>QuizMaster</strong>, you agree to this Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;