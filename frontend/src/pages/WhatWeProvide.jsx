import React from "react";
import { Link } from "react-router-dom";
import "./WhatWeProvide.css";

function WhatWeProvide() {
  const categories = [
    {
      icon: "🎒",
      title: "School Education",
      description:
        "Structured quiz practice for students from Class 1 to Class 12.",
      items: [
        "Class 1–5",
        "Class 6–8",
        "Class 9–10",
        "Class 11–12",
      ],
    },
    {
      icon: "🎯",
      title: "Competitive Exams",
      description:
        "Practice-oriented preparation for major entrance and government examinations.",
      items: [
        "JEE",
        "NEET",
        "GATE",
        "CUET",
        "NDA",
        "SSC",
        "UPSC",
        "Railway",
      ],
    },
    {
      icon: "🎓",
      title: "Higher Education",
      description:
        "Quiz-based learning and subject practice for undergraduate and postgraduate courses.",
      items: [
        "B.Tech / BE",
        "BCA / MCA",
        "B.Sc",
        "B.Com",
        "BBA / BMS",
        "BA",
        "M.Tech",
        "CA",
      ],
    },
    {
      icon: "🏥",
      title: "Medical & Healthcare",
      description:
        "Academic practice covering medical, pharmacy and nursing-related education.",
      items: [
        "MBBS",
        "BDS",
        "B.Pharm",
        "Nursing",
        "GNM",
        "Biotechnology",
      ],
    },
    {
      icon: "💻",
      title: "Technology & Skills",
      description:
        "Build knowledge in modern technology and career-focused digital skills.",
      items: [
        "Computer Science",
        "Artificial Intelligence",
        "Data Science",
        "Cyber Security",
        "Cloud Computing",
        "Web Development",
      ],
    },
    {
      icon: "🎨",
      title: "Creative & Professional",
      description:
        "Explore career-oriented subjects beyond traditional academic streams.",
      items: [
        "Fashion Design",
        "Journalism",
        "Mass Communication",
        "Psychology",
        "Digital Marketing",
        "Animation",
      ],
    },
  ];

  const features = [
    {
      icon: "📝",
      title: "Subject-wise Quizzes",
      text: "Practice questions organized by course and subject.",
    },
    {
      icon: "🎲",
      title: "Random Questions",
      text: "Questions can be selected dynamically for better practice.",
    },
    {
      icon: "⏱️",
      title: "Timed Practice",
      text: "Improve speed and accuracy through timed quiz sessions.",
    },
    {
      icon: "🏆",
      title: "Leaderboard",
      text: "Compare your performance and track your position.",
    },
    {
      icon: "📊",
      title: "Instant Results",
      text: "See your score and performance immediately after a quiz.",
    },
    {
      icon: "📚",
      title: "Multiple Learning Paths",
      text: "Explore school, college, competitive and career-focused courses.",
    },
  ];

  return (
    <div className="what-we-provide-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="wwp-hero">
        <div className="wwp-hero-glow wwp-glow-one"></div>
        <div className="wwp-hero-glow wwp-glow-two"></div>

        <div className="wwp-hero-content">
          <span className="wwp-eyebrow">
            🧠 QUIZMASTER LEARNING PLATFORM
          </span>

          <h1>
            What We
            <span> Provide</span>
          </h1>

          <p>
            QuizMaster is an educational quiz platform designed to help
            students and learners practice knowledge, improve accuracy,
            build confidence and prepare for different academic and
            competitive examinations.
          </p>

          <div className="wwp-hero-actions">
            <Link to="/" className="wwp-primary-btn">
              🚀 Explore QuizMaster
            </Link>

            <Link to="/courses" className="wwp-secondary-btn">
              📚 Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="wwp-intro">
        <span className="wwp-section-label">
          WHAT QUIZMASTER OFFERS
        </span>

        <h2>
          Learning and Practice
          <span> in One Place</span>
        </h2>

        <p>
          QuizMaster brings together educational quizzes across school
          education, higher education, competitive examinations and
          career-oriented subjects. Our goal is to make regular practice
          simple, accessible and engaging.
        </p>
      </section>

      {/* =====================================================
          COURSE CATEGORIES
      ===================================================== */}

      <section className="wwp-categories">
        <div className="wwp-section-heading">
          <span className="wwp-section-label">
            📚 OUR LEARNING AREAS
          </span>

          <h2>
            Courses for Different
            <span> Learning Goals</span>
          </h2>

          <p>
            Explore different educational and career paths available
            through QuizMaster.
          </p>
        </div>

        <div className="wwp-category-grid">
          {categories.map((category, index) => (
            <article
              className="wwp-category-card"
              key={category.title}
            >
              <div className="wwp-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="wwp-category-icon">
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <div className="wwp-course-tags">
                {category.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="wwp-features">
        <div className="wwp-section-heading">
          <span className="wwp-section-label">
            ⚡ PLATFORM FEATURES
          </span>

          <h2>
            Built for
            <span> Better Practice</span>
          </h2>

          <p>
            Useful features designed to make quiz-based learning easier
            and more engaging.
          </p>
        </div>

        <div className="wwp-feature-grid">
          {features.map((feature) => (
            <div
              className="wwp-feature-card"
              key={feature.title}
            >
              <div className="wwp-feature-icon">
                {feature.icon}
              </div>

              <div>
                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          HOW IT HELPS
      ===================================================== */}

      <section className="wwp-benefits">
        <div className="wwp-benefits-content">
          <span className="wwp-section-label">
            🎯 WHY QUIZMASTER
          </span>

          <h2>
            Turn Regular Practice
            <span> Into Progress</span>
          </h2>

          <p>
            Consistent practice can help learners identify knowledge
            gaps, improve recall and become more comfortable with
            exam-style questions.
          </p>

          <div className="wwp-benefit-list">
            <div>
              <span>✓</span>
              <p>Practice regularly with topic-focused questions.</p>
            </div>

            <div>
              <span>✓</span>
              <p>Improve speed and accuracy through repeated quizzes.</p>
            </div>

            <div>
              <span>✓</span>
              <p>Explore different academic and career paths.</p>
            </div>

            <div>
              <span>✓</span>
              <p>Track performance and identify areas for improvement.</p>
            </div>
          </div>
        </div>

        <div className="wwp-benefit-visual">
          <div className="wwp-stat-card">
            <strong>📚</strong>
            <span>Multiple Courses</span>
          </div>

          <div className="wwp-stat-card">
            <strong>📝</strong>
            <span>Quiz Practice</span>
          </div>

          <div className="wwp-stat-card">
            <strong>🎯</strong>
            <span>Exam Preparation</span>
          </div>

          <div className="wwp-stat-card">
            <strong>🏆</strong>
            <span>Performance Tracking</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="wwp-cta">
        <div className="wwp-cta-content">
          <span>🧠 READY TO LEARN?</span>

          <h2>
            Start Your QuizMaster
            <br />
            Learning Journey
          </h2>

          <p>
            Choose a course, select a subject and start practicing.
          </p>

          <Link to="/" className="wwp-cta-button">
            🚀 Start Exploring
          </Link>
        </div>
      </section>

    </div>
  );
}

export default WhatWeProvide;