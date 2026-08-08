
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // =========================================================
  // API CONFIGURATION
  // =========================================================

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://quizmaster-qsjk.onrender.com";

  // =========================================================
  // INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  // =========================================================
  // FORM VALIDATION
  // =========================================================

  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      return "Please enter your name.";
    }

    if (name.length < 2) {
      return "Name must contain at least 2 characters.";
    }

    if (!email) {
      return "Please enter your email address.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    if (!message) {
      return "Please enter your message.";
    }

    if (message.length < 5) {
      return "Message must contain at least 5 characters.";
    }

    if (message.length > 2000) {
      return "Message cannot exceed 2000 characters.";
    }

    return null;
  };

  // =========================================================
  // SUBMIT CONTACT FORM
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setStatus({
        type: "error",
        message: validationError,
      });
      return;
    }

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const cleanData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      // =====================================================
      // NORMALIZE API URL
      // =====================================================

      let baseURL = API_URL.trim().replace(/\/+$/, "");

      // Prevent /api/api/contact
      if (baseURL.endsWith("/api")) {
        baseURL = baseURL.slice(0, -4);
      }

      const endpoint = `${baseURL}/api/contact`;

      console.log("📩 Contact API URL:", endpoint);
      console.log("📦 Contact payload:", cleanData);

      // =====================================================
      // SEND REQUEST
      // =====================================================

      const response = await fetch(endpoint, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(cleanData),
      });

      console.log(
        "📡 Contact response status:",
        response.status
      );

      // =====================================================
      // READ RESPONSE
      // =====================================================

      let data = {};

      const contentType =
        response.headers.get("content-type") || "";

      if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();

        console.error(
          "❌ Server returned non-JSON response:",
          text
        );

        data = {
          message: text,
        };
      }

      console.log("📨 Contact response:", data);

      // =====================================================
      // HANDLE ERROR
      // =====================================================

      if (!response.ok) {
        throw new Error(
          data?.message ||
            `Unable to send your message. Server returned ${response.status}.`
        );
      }

      // =====================================================
      // SUCCESS
      // =====================================================

      setStatus({
        type: "success",
        message:
          data?.message ||
          "Message sent successfully. We will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error?.message ||
          "Unable to send your message right now. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <main className="contact-page">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="contact-bg-orb contact-orb-one"></div>

      <div className="contact-bg-orb contact-orb-two"></div>

      <div className="contact-grid-bg"></div>

      {/* =====================================================
          MAIN CONTACT WRAPPER
      ===================================================== */}

      <section className="contact-wrapper">

        {/* ===================================================
            LEFT SIDE
        =================================================== */}

        <div className="contact-left">

          {/* Badge */}

          <div className="contact-badge">
            <span className="badge-dot"></span>

            We'd Love To Hear From You
          </div>

          {/* Title */}

          <h1 className="contact-title">
            Let's Build Something

            <span>
              Amazing Together.
            </span>
          </h1>

          {/* Description */}

          <p className="contact-description">
            Have a question, feedback, suggestion, or just want
            to say hello? Our team is always ready to hear from
            you.
          </p>

          {/* =================================================
              MINI STATS
          ================================================= */}

          <div className="contact-mini-stats">

            <div className="mini-stat">
              <strong>24/7</strong>
              <span>Available</span>
            </div>

            <div className="mini-stat">
              <strong>Fast</strong>
              <span>Response</span>
            </div>

            <div className="mini-stat">
              <strong>100%</strong>
              <span>Student Focused</span>
            </div>

          </div>

          {/* =================================================
              CONTACT INFO
          ================================================= */}

          <div className="contact-info-list">

            {/* Email */}

            <div className="contact-info-card">

              <div className="contact-info-icon email-icon">
                ✉
              </div>

              <div>
                <span>EMAIL US</span>

                <h3>
                  Contact Support
                </h3>

                <p>
                  Send us your questions or feedback
                </p>
              </div>

            </div>

            {/* Idea */}

            <div className="contact-info-card">

              <div className="contact-info-icon idea-icon">
                ✦
              </div>

              <div>
                <span>HAVE AN IDEA?</span>

                <h3>
                  Share Your Ideas
                </h3>

                <p>
                  Help us make QuizMaster better
                </p>
              </div>

            </div>

            {/* Support */}

            <div className="contact-info-card">

              <div className="contact-info-icon support-icon">
                ⚡
              </div>

              <div>
                <span>QUICK SUPPORT</span>

                <h3>
                  We're Here To Help
                </h3>

                <p>
                  Your feedback matters to us
                </p>
              </div>

            </div>

          </div>

          {/* Back Home */}

          <Link
            to="/"
            className="back-home-link"
          >
            ← Back to QuizMaster
          </Link>

        </div>

        {/* ===================================================
            RIGHT SIDE
        =================================================== */}

        <div className="contact-right">

          {/* =================================================
              FORM CARD
          ================================================= */}

          <div className="contact-form-card">

            {/* Form Header */}

            <div className="form-header">

              <div className="form-header-icon">
                💬
              </div>

              <div>
                <span>
                  GET IN TOUCH
                </span>

                <h2>
                  Send us a message
                </h2>
              </div>

            </div>

            {/* Header Description */}

            <p className="form-header-text">
              Fill out the form below and we'll get back to
              you as soon as possible.
            </p>

            {/* =================================================
                STATUS ALERT
            ================================================= */}

            {status.message && (
              <div
                className={`contact-alert ${
                  status.type === "success"
                    ? "alert-success"
                    : "alert-error"
                }`}
                role="alert"
              >

                <span className="alert-icon">
                  {status.type === "success"
                    ? "✓"
                    : "!"}
                </span>

                <span>
                  {status.message}
                </span>

              </div>
            )}

            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <form
              className="premium-contact-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* =================================================
                  NAME
              ================================================= */}

              <div className="form-field">

                <label htmlFor="contact-name">
                  Your Name
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    👤
                  </span>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    autoComplete="name"
                    maxLength={100}
                  />

                </div>

              </div>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div className="form-field">

                <label htmlFor="contact-email">
                  Email Address
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    @
                  </span>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    autoComplete="email"
                    maxLength={150}
                  />

                </div>

              </div>

              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div className="form-field">

                <div className="label-row">

                  <label htmlFor="contact-message">
                    Your Message
                  </label>

                  <span className="character-count">
                    {formData.message.length}/2000
                  </span>

                </div>

                <div className="textarea-wrapper">

                  <span className="textarea-icon">
                    ✎
                  </span>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    rows={6}
                    maxLength={2000}
                  />

                </div>

              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================= */}

              <button
                type="submit"
                className="premium-submit-button"
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span className="loading-spinner"></span>

                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message

                    <span className="send-arrow">
                      →
                    </span>
                  </>
                )}

              </button>

              {/* =================================================
                  SECURITY NOTE
              ================================================= */}

              <div className="form-security-note">

                <span>
                  🔒
                </span>

                <p>
                  Your information is secure and will only
                  be used to respond to your message.
                </p>

              </div>

            </form>

          </div>

          {/* =================================================
              QUOTE
          ================================================= */}

          <div className="contact-quote">

            <span>
              “
            </span>

            <p>
              Learn faster. Play smarter.
            </p>

            <span>
              ”
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="contact-footer">

        <span>
          © {new Date().getFullYear()} QuizMaster
        </span>

        <span>
          Made for learners who want to grow 🚀
        </span>

      </footer>

    </main>
  );
}

export default Contact;
