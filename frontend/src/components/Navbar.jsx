import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <Link to="/" className="logo">
        🧠 QuizMaster
      </Link>

      <nav className="nav-links">

        <Link to="/" className="nav-item">
          Home
        </Link>

        <Link to="/login" className="nav-item">
          Login
        </Link>

        <Link to="/signup" className="start-btn">
          Get Started
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;