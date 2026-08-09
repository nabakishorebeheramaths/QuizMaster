import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        🧠 <span>QuizMaster</span>
      </Link>

      {/* Desktop / Mobile Navigation */}
      <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

        <Link
          to="/"
          className="nav-item"
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="/login"
          className="nav-item"
          onClick={closeMenu}
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="start-btn"
          onClick={closeMenu}
        >
          Get Started
        </Link>

      </nav>

      {/* Mobile Menu Button */}
      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>
  );
}

export default Navbar;