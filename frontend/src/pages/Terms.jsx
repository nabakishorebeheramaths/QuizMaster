import React from "react";

function Terms() {
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
          📜 Terms & Conditions
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
          Welcome to <strong>QuizMaster</strong>. By accessing or using this
          website, you agree to comply with the following Terms & Conditions.
          Please read them carefully before using our services.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255,255,255,.2)",
            margin: "35px 0",
          }}
        />

        <h2 style={{ color: "#38BDF8" }}>📚 1. Use of Website</h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          QuizMaster is an educational platform that provides quizzes for
          learning and practice. You agree to use this website only for lawful
          educational purposes.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          👤 2. User Accounts
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          You are responsible for maintaining the confidentiality of your login
          credentials. Any activity performed through your account is your
          responsibility.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          📝 3. Quiz Content
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          Our quizzes are prepared for educational purposes. While we strive for
          accuracy, QuizMaster does not guarantee that every question is free
          from errors.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          🏆 4. Leaderboard & Fair Play
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          Users are expected to participate fairly. Any attempt to manipulate
          quiz scores, rankings, or exploit the system may result in account
          suspension or permanent removal.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          © 5. Intellectual Property
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          All content, including quizzes, logos, branding, graphics, and website
          design, belongs to QuizMaster unless otherwise stated. Unauthorized
          copying or redistribution is prohibited.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          ⚠️ 6. Limitation of Liability
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          QuizMaster is not responsible for any direct or indirect damages,
          losses, or inconvenience resulting from the use of this website or its
          content.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          🔄 7. Updates to Terms
        </h2>

        <p style={{ lineHeight: "1.9", color: "#E2E8F0" }}>
          We may update these Terms & Conditions at any time. Continued use of
          QuizMaster after changes are published means you accept the updated
          terms.
        </p>

        <h2 style={{ color: "#38BDF8", marginTop: "35px" }}>
          📧 8. Contact Us
        </h2>

        <div
          style={{
            background: "rgba(255,255,255,.08)",
            borderRadius: "15px",
            padding: "20px",
            marginTop: "15px",
          }}
        >
          <p>
            <strong>Email:</strong> nabakishorebehera57@gmail.com
          </p>

          <p style={{ color: "#CBD5E1" }}>
            If you have any questions regarding these Terms & Conditions, feel
            free to contact us.
          </p>
        </div>

        <p
          style={{
            marginTop: "40px",
            textAlign: "center",
            color: "#94A3B8",
            fontSize: "16px",
          }}
        >
          By using <strong>QuizMaster</strong>, you acknowledge that you have
          read, understood, and agreed to these Terms & Conditions.
        </p>
      </div>
    </div>
  );
}

export default Terms;