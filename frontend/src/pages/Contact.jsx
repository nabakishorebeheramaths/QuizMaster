import React from "react";

function Contact() {
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
          maxWidth: "1000px",
          margin: "auto",
          background: "rgba(255,255,255,.12)",
          backdropFilter: "blur(18px)",
          borderRadius: "25px",
          padding: "45px",
          color: "#fff",
          boxShadow: "0 20px 45px rgba(0,0,0,.35)",
          border: "1px solid rgba(255,255,255,.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#FFD700",
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          📩 Contact Us
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#CBD5E1",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          We'd love to hear from you. Feel free to contact us anytime.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          {/* Contact Info */}
          <div>
            <h2 style={{ color: "#38BDF8" }}>📍 Contact Information</h2>

            <div
              style={{
                marginTop: "20px",
                lineHeight: "2.2",
                fontSize: "17px",
              }}
            >
              <p>📧 <b>Email</b></p>
              <p style={{ color: "#E2E8F0" }}>
                nabakishorebehera57@gmail.com
              </p>

              <br />

              <p>🌐 <b>Website</b></p>
              <p style={{ color: "#E2E8F0" }}>
                QuizMaster - India's Smart Quiz Platform
              </p>

              <br />

              <p>🎓 <b>Purpose</b></p>
              <p style={{ color: "#E2E8F0" }}>
                Daily GATE Quiz, Aptitude, Engineering Mathematics,
                Reasoning and Current Affairs.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 style={{ color: "#38BDF8" }}>💬 Send Message</h2>

            <form style={{ marginTop: "20px" }}>
              <input
                type="text"
                placeholder="Your Name"
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Your Email"
                style={inputStyle}
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                style={{
                  ...inputStyle,
                  resize: "none",
                }}
              />

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  marginTop: "15px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#FFD700",
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "17px",
                  cursor: "pointer",
                }}
              >
                🚀 Send Message
              </button>
            </form>
          </div>
        </div>

        <hr
          style={{
            margin: "45px 0",
            border: "none",
            borderTop: "1px solid rgba(255,255,255,.15)",
          }}
        />

        <p
          style={{
            textAlign: "center",
            color: "#CBD5E1",
          }}
        >
          Thank you for visiting <b>QuizMaster</b>. ❤️
          <br />
          We usually respond within 24-48 hours.
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,.25)",
  background: "rgba(255,255,255,.08)",
  color: "#fff",
  fontSize: "16px",
  outline: "none",
};

export default Contact;