import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="quizmaster-footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Logo */}
          <div className="footer-column footer-brand">
            <h2>🧠 QuizMaster</h2>

            <p>
              India's Smart Quiz Platform for{" "}
              <strong>Class 1 to 12</strong> and major competitive
              exams across all sectors including{" "}
              <strong>
                JEE, NEET, GATE, UPSC, SSC, Banking, Railway,
                Police, Defence, Government Exams
              </strong>{" "}
              and many more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <div className="footer-links">
              <Link to="/">
                🏠 Home
              </Link>

              <Link to="/about">
                👨 About
              </Link>

              <Link to="/leaderboard">
                🏆 Leaderboard
              </Link>

              {/* NEW */}
              <Link to="/what-we-provide">
                📚 What We Provide
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h3>Legal</h3>

            <div className="footer-links">
              <Link to="/privacy-policy">
                🔒 Privacy Policy
              </Link>

              <Link to="/terms">
                📜 Terms & Conditions
              </Link>

              <Link to="/contact">
                📩 Contact Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Contact</h3>

            <p className="footer-contact">
              📧 nabakishorebehera57@gmail.com
              <br />
              📍 Mitrapur, Balasore,
              <br />
              Odisha, India
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        <p className="footer-bottom">
          © {new Date().getFullYear()} QuizMaster. All Rights Reserved.
          <br />
          Made with ❤️ by <strong>Nabakishore Behera</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;