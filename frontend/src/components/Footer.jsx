import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg,#0F172A,#1E3A8A,#2563EB)",
        color: "#fff",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "50px 25px 25px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "35px",
          }}
        >
          {/* Logo */}
          <div>
            <h2 style={{ color: "#FFD700" }}>🧠 QuizMaster</h2>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "1.8",
                marginTop: "15px",
              }}
            >
              India's Smart Quiz Platform for GATE, Placement Preparation,
              Engineering Mathematics, Aptitude, Reasoning and Current Affairs.
            </p>
          </div>
```jsx
{/* Quick Links */}
<div>
  <h3 style={{ color: "#FFD700" }}>Quick Links</h3>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "15px",
    }}
  >
    <Link style={linkStyle} to="/">
      🏠 Home
    </Link>

    <Link style={linkStyle} to="/about">
      👨 About
    </Link>

    <Link style={linkStyle} to="/leaderboard">
      🏆 Leaderboard
    </Link>
  </div>
</div>
```


          {/* Legal */}
          <div>
            <h3 style={{ color: "#FFD700" }}>Legal</h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "15px",
              }}
            >
              <Link style={linkStyle} to="/privacy-policy">
                🔒 Privacy Policy
              </Link>

              <Link style={linkStyle} to="/terms">
                📜 Terms & Conditions
              </Link>

              <Link style={linkStyle} to="/contact">
                📩 Contact Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "#FFD700" }}>Contact</h3>

            <p style={{ color: "#CBD5E1", lineHeight: "2", marginTop: "15px" }}>
              📧 nabakishorebehera57@gmail.com
              <br />
              📍 Mitrapur, Balasore,
              <br />
              Odisha, India
            </p>
          </div>
        </div>

        <hr
          style={{
            margin: "35px 0 20px",
            border: "none",
            borderTop: "1px solid rgba(255,255,255,.2)",
          }}
        />

        <p
          style={{
            textAlign: "center",
            color: "#CBD5E1",
          }}
        >
          © {new Date().getFullYear()} QuizMaster. All Rights Reserved.
          <br />
          Made with ❤️ by <strong>Nabakishore Behera</strong>
        </p>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#E2E8F0",
  textDecoration: "none",
  transition: "0.3s",
};

export default Footer;