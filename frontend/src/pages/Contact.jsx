import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove old status when user starts typing again
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your name.",
      });
      return;
    }

    if (!formData.email.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your email address.",
      });
      return;
    }

    if (!formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your message.",
      });
      return;
    }

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message:
          "Message sent successfully! We'll get back to you within 24–48 hours.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send your message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>

        {/* Header */}
        <div style={headerStyle}>
          <div style={iconCircleStyle}>📩</div>

          <h1 style={titleStyle}>Contact Us</h1>

          <p style={subtitleStyle}>
            Have a question, suggestion, or feedback?
            <br />
            We'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div style={contentGridStyle}>

          {/* Contact Information */}
          <div style={infoSectionStyle}>

            <div style={sectionHeadingStyle}>
              <span style={headingIconStyle}>📍</span>
              <h2 style={sectionTitleStyle}>
                Contact Information
              </h2>
            </div>

            <p style={infoDescriptionStyle}>
              Feel free to reach out to us. Your feedback helps
              us make QuizMaster better every day.
            </p>

            {/* Email Card */}
            <div style={infoCardStyle}>
              <div style={infoIconBoxStyle}>📧</div>

              <div>
                <span style={infoLabelStyle}>Email</span>

                <p style={infoValueStyle}>
                  nabakishorebehera57@gmail.com
                </p>
              </div>
            </div>

            {/* Website Card */}
            <div style={infoCardStyle}>
              <div style={infoIconBoxStyle}>🌐</div>

              <div>
                <span style={infoLabelStyle}>Platform</span>

                <p style={infoValueStyle}>
                  QuizMaster – India's Smart Quiz Platform
                </p>
              </div>
            </div>

            {/* Purpose Card */}
            <div style={infoCardStyle}>
              <div style={infoIconBoxStyle}>🎓</div>

              <div>
                <span style={infoLabelStyle}>Purpose</span>

                <p style={infoValueStyle}>
                  Daily GATE Quiz, Aptitude, Engineering
                  Mathematics, Reasoning and Current Affairs.
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div style={responseCardStyle}>
              <span style={{ fontSize: "24px" }}>⚡</span>

              <div>
                <strong style={{ color: "#fff" }}>
                  Quick Response
                </strong>

                <p
                  style={{
                    margin: "4px 0 0",
                    color: "#CBD5E1",
                    fontSize: "14px",
                  }}
                >
                  We usually respond within 24–48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={formCardStyle}>

            <div style={sectionHeadingStyle}>
              <span style={headingIconStyle}>💬</span>

              <h2 style={sectionTitleStyle}>
                Send Message
              </h2>
            </div>

            <p style={formDescriptionStyle}>
              Fill in the details below and we'll get back to
              you as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div style={fieldWrapperStyle}>
                <label style={labelStyle}>
                  Your Name
                </label>

                <div style={inputWrapperStyle}>
                  <span style={inputIconStyle}>👤</span>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    style={inputStyle}
                    maxLength={100}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Email */}
              <div style={fieldWrapperStyle}>
                <label style={labelStyle}>
                  Your Email
                </label>

                <div style={inputWrapperStyle}>
                  <span style={inputIconStyle}>✉️</span>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    style={inputStyle}
                    maxLength={150}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Message */}
              <div style={fieldWrapperStyle}>
                <label style={labelStyle}>
                  Your Message
                </label>

                <div
                  style={{
                    ...inputWrapperStyle,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      ...inputIconStyle,
                      paddingTop: "3px",
                    }}
                  >
                    💭
                  </span>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                    style={textareaStyle}
                    maxLength={1000}
                    disabled={loading}
                  />
                </div>

                <div style={characterCountStyle}>
                  {formData.message.length}/1000
                </div>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  style={{
                    ...statusStyle,
                    ...(status.type === "success"
                      ? successStyle
                      : errorStyle),
                  }}
                >
                  <span style={{ fontSize: "18px" }}>
                    {status.type === "success" ? "✅" : "⚠️"}
                  </span>

                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  ...buttonStyle,
                  ...(loading ? buttonDisabledStyle : {}),
                }}
              >
                {loading ? (
                  <>
                    <span style={spinnerStyle}></span>
                    Sending Message...
                  </>
                ) : (
                  <>
                    🚀 Send Message
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

        {/* Footer */}
        <div style={footerStyle}>
          <div style={footerLineStyle}></div>

          <p style={footerTextStyle}>
            Thank you for visiting <strong>QuizMaster</strong>. ❤️
          </p>

          <p style={footerSubTextStyle}>
            Learn Faster • Play Smarter • Improve Every Day
          </p>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 850px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 600px) {
            .contact-container {
              padding: 28px 18px !important;
              border-radius: 20px !important;
            }

            .contact-title {
              font-size: 34px !important;
            }

            .contact-subtitle {
              font-size: 15px !important;
            }

            .contact-page {
              padding: 30px 12px !important;
            }
          }

          input::placeholder,
          textarea::placeholder {
            color: rgba(203, 213, 225, 0.55);
          }

          input:focus,
          textarea:focus {
            border-color: rgba(56, 189, 248, 0.8) !important;
            background: rgba(255, 255, 255, 0.10) !important;
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.10);
          }

          button:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 12px 25px rgba(255, 215, 0, 0.25);
          }

          button:active:not(:disabled) {
            transform: translateY(0);
          }
        `}
      </style>
    </div>
  );
}

/* ================================
   PAGE STYLES
================================ */

const pageStyle = {
  minHeight: "100vh",
  background:
    "linear-gradient(135deg, #0F172A 0%, #172554 35%, #1E40AF 70%, #2563EB 100%)",
  padding: "60px 20px",
  fontFamily: "'Poppins', sans-serif",
  boxSizing: "border-box",
};

const containerStyle = {
  maxWidth: "1100px",
  margin: "auto",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  borderRadius: "28px",
  padding: "45px",
  color: "#fff",
  boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
  border: "1px solid rgba(255,255,255,0.14)",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "45px",
};

const iconCircleStyle = {
  width: "70px",
  height: "70px",
  margin: "0 auto 18px",
  borderRadius: "50%",
  background:
    "linear-gradient(135deg, #38BDF8, #2563EB)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "32px",
  boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
};

const titleStyle = {
  margin: 0,
  fontSize: "42px",
  fontWeight: 800,
  color: "#FFD700",
  letterSpacing: "-1px",
};

const subtitleStyle = {
  marginTop: "12px",
  marginBottom: 0,
  color: "#CBD5E1",
  fontSize: "17px",
  lineHeight: 1.7,
};

const contentGridStyle = {
  display: "grid",
  gridTemplateColumns: "0.9fr 1.1fr",
  gap: "40px",
  alignItems: "start",
};

const infoSectionStyle = {
  padding: "5px",
};

const sectionHeadingStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
};

const headingIconStyle = {
  fontSize: "25px",
};

const sectionTitleStyle = {
  margin: 0,
  color: "#38BDF8",
  fontSize: "24px",
  fontWeight: 700,
};

const infoDescriptionStyle = {
  color: "#CBD5E1",
  lineHeight: 1.7,
  fontSize: "15px",
  marginBottom: "25px",
};

const infoCardStyle = {
  display: "flex",
  gap: "15px",
  alignItems: "flex-start",
  padding: "18px",
  marginBottom: "15px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.10)",
};

const infoIconBoxStyle = {
  minWidth: "45px",
  height: "45px",
  borderRadius: "12px",
  background: "rgba(56,189,248,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "21px",
};

const infoLabelStyle = {
  display: "block",
  color: "#94A3B8",
  fontSize: "13px",
  marginBottom: "4px",
};

const infoValueStyle = {
  margin: 0,
  color: "#E2E8F0",
  fontSize: "14px",
  lineHeight: 1.6,
  wordBreak: "break-word",
};

const responseCardStyle = {
  display: "flex",
  gap: "12px",
  alignItems: "center",
  marginTop: "20px",
  padding: "16px",
  borderRadius: "15px",
  background:
    "linear-gradient(135deg, rgba(56,189,248,0.12), rgba(37,99,235,0.12))",
  border: "1px solid rgba(56,189,248,0.18)",
};

const formCardStyle = {
  background: "rgba(15,23,42,0.28)",
  borderRadius: "22px",
  padding: "30px",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 15px 35px rgba(0,0,0,0.18)",
};

const formDescriptionStyle = {
  color: "#94A3B8",
  fontSize: "14px",
  lineHeight: 1.6,
  marginBottom: "25px",
};

const fieldWrapperStyle = {
  marginBottom: "18px",
};

const labelStyle = {
  display: "block",
  color: "#E2E8F0",
  fontSize: "14px",
  fontWeight: 600,
  marginBottom: "8px",
};

const inputWrapperStyle = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  width: "100%",
  boxSizing: "border-box",
  padding: "0 14px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.16)",
  transition: "all 0.2s ease",
};

const inputIconStyle = {
  fontSize: "17px",
  opacity: 0.8,
};

const inputStyle = {
  flex: 1,
  width: "100%",
  padding: "15px 0",
  border: "none",
  outline: "none",
  background: "transparent",
  color: "#fff",
  fontSize: "15px",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

const textareaStyle = {
  flex: 1,
  width: "100%",
  padding: "15px 0",
  border: "none",
  outline: "none",
  background: "transparent",
  color: "#fff",
  fontSize: "15px",
  fontFamily: "inherit",
  resize: "vertical",
  minHeight: "140px",
  lineHeight: 1.6,
  boxSizing: "border-box",
};

const characterCountStyle = {
  textAlign: "right",
  color: "#64748B",
  fontSize: "11px",
  marginTop: "5px",
};

const statusStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "13px 15px",
  borderRadius: "11px",
  marginBottom: "15px",
  fontSize: "13px",
  lineHeight: 1.5,
};

const successStyle = {
  background: "rgba(34,197,94,0.12)",
  border: "1px solid rgba(34,197,94,0.3)",
  color: "#86EFAC",
};

const errorStyle = {
  background: "rgba(239,68,68,0.12)",
  border: "1px solid rgba(239,68,68,0.3)",
  color: "#FCA5A5",
};

const buttonStyle = {
  width: "100%",
  minHeight: "54px",
  padding: "15px 20px",
  marginTop: "5px",
  border: "none",
  borderRadius: "13px",
  background:
    "linear-gradient(135deg, #FFD700, #FACC15)",
  color: "#000",
  fontWeight: 800,
  fontSize: "16px",
  fontFamily: "inherit",
  cursor: "pointer",
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "9px",
};

const buttonDisabledStyle = {
  opacity: 0.7,
  cursor: "not-allowed",
};

const spinnerStyle = {
  width: "17px",
  height: "17px",
  border: "3px solid rgba(0,0,0,0.25)",
  borderTopColor: "#000",
  borderRadius: "50%",
  display: "inline-block",
  animation: "spin 0.8s linear infinite",
};

const footerStyle = {
  marginTop: "45px",
  textAlign: "center",
};

const footerLineStyle = {
  height: "1px",
  background: "rgba(255,255,255,0.12)",
  marginBottom: "25px",
};

const footerTextStyle = {
  margin: 0,
  color: "#CBD5E1",
  fontSize: "14px",
};

const footerSubTextStyle = {
  marginTop: "7px",
  color: "#64748B",
  fontSize: "12px",
};

export default Contact;