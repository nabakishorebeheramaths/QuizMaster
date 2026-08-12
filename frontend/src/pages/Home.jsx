import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="hero" aria-labelledby="quizmaster-main-heading">
        <div className="hero-left">

          <span className="badge">
            🚀 India's Smart Quiz Platform
          </span>

          <h1
            id="quizmaster-main-heading"
            className="rainbow-text"
          >
            QuizMaster — Learn Faster.{" "}
            <br />
            Play Smarter.
          </h1>

          <p>
            <strong>QuizMaster</strong> is an online quiz and learning
            platform for students, learners and competitive exam
            aspirants. Practice daily questions, improve your knowledge
            and challenge yourself with engaging quizzes.
          </p>

          <p>
            Quiz for everyone — from{" "}
            <strong className="rainbow-inline">
              Class 1 to 12
            </strong>{" "}
            and competitive exams across all major sectors like{" "}
            <strong className="rainbow-inline">
              JEE, NEET, GATE
            </strong>{" "}
            and many more.
          </p>

          <p>
            Practice subjects and skills including{" "}
            <strong>Aptitude, Mathematics, Reasoning, English,
            Current Affairs, Science and Engineering</strong>.
          </p>

          <p className="creator rainbow-text">
            Created by Nabakishore Behera
          </p>

        </div>

        {/* =========================================
            QUIZMASTER CARD
        ========================================= */}
        <div className="hero-right">

          <div className="card">

            <div
              className="emoji"
              role="img"
              aria-label="Brain"
            >
              🧠
            </div>

            <h2 className="rainbow-text">
              Quiz Master
            </h2>

            <p>
              Challenge yourself with hundreds of exciting quizzes
              designed for school students, college students and
              competitive exam aspirants.
            </p>

            <div className="info">

              <div>
                <h3 className="rainbow-text">
                  30,000+
                </h3>
                <small>
                  Verified Questions
                </small>
              </div>

              <div>
                <h3 className="rainbow-text">
                  100+
                </h3>
                <small>
                  Categories
                </small>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          WHAT IS QUIZMASTER
      ========================================= */}
      <section
        className="seo-content"
        aria-labelledby="about-quizmaster"
      >

        <h2
          id="about-quizmaster"
          className="rainbow-text"
        >
          What is QuizMaster?
        </h2>

        <p>
          QuizMaster is a daily online quiz platform created to make
          learning more interactive and enjoyable. Students can use
          QuizMaster to practice questions, test their knowledge,
          improve accuracy and build confidence through regular quiz
          practice.
        </p>

        <p>
          Whether you are preparing for school examinations,
          competitive exams or engineering-related subjects, QuizMaster
          provides a convenient place to practice questions and track
          your performance.
        </p>

      </section>


      {/* =========================================
          QUIZ CATEGORIES
      ========================================= */}
      <section
        className="quiz-categories"
        aria-labelledby="quiz-categories-heading"
      >

        <h2
          id="quiz-categories-heading"
          className="rainbow-text"
        >
          Popular Quiz Categories
        </h2>

        <p>
          Explore different types of quizzes and practice questions
          available on QuizMaster.
        </p>

        <div className="category-grid">

          <article className="category-card">
            <span className="category-icon">🧮</span>
            <h3>Mathematics Quiz</h3>
            <p>
              Practice mathematics and problem-solving questions.
            </p>
          </article>

          <article className="category-card">
            <span className="category-icon">🎯</span>
            <h3>Aptitude Quiz</h3>
            <p>
              Improve quantitative aptitude and exam-solving skills.
            </p>
          </article>

          <article className="category-card">
            <span className="category-icon">🧠</span>
            <h3>Reasoning Quiz</h3>
            <p>
              Practice logical reasoning and analytical questions.
            </p>
          </article>

          <article className="category-card">
            <span className="category-icon">📖</span>
            <h3>English Quiz</h3>
            <p>
              Improve English vocabulary, grammar and language skills.
            </p>
          </article>

          <article className="category-card">
            <span className="category-icon">📰</span>
            <h3>Current Affairs Quiz</h3>
            <p>
              Test your knowledge of current events and general awareness.
            </p>
          </article>

          <article className="category-card">
            <span className="category-icon">⚡</span>
            <h3>Engineering Quiz</h3>
            <p>
              Practice engineering and technical questions for students.
            </p>
          </article>

        </div>

      </section>


      {/* =========================================
          DAILY PRACTICE
      ========================================= */}
      <section
        className="daily-practice"
        aria-labelledby="daily-practice-heading"
      >

        <h2
          id="daily-practice-heading"
          className="rainbow-text"
        >
          Practice Daily Quiz Questions
        </h2>

        <p>
          Make quiz practice a daily habit with QuizMaster. Regular
          practice can help you improve speed, accuracy, general
          knowledge and confidence before important examinations.
        </p>

        <p>
          Start with your favourite subject, challenge yourself with
          different questions and keep improving your score.
        </p>

      </section>


      {/* =========================================
          WHY QUIZMASTER
      ========================================= */}
      <section
        className="why-quizmaster"
        aria-labelledby="why-quizmaster-heading"
      >

        <h2
          id="why-quizmaster-heading"
          className="rainbow-text"
        >
          Why Practice with QuizMaster?
        </h2>

        <div className="features-grid">

          <article className="feature-card">
            <span>📅</span>
            <h3>Daily Quiz Practice</h3>
            <p>
              Practice questions regularly and build a consistent
              learning routine.
            </p>
          </article>

          <article className="feature-card">
            <span>🎓</span>
            <h3>For Students & Aspirants</h3>
            <p>
              Designed for school students, college students and
              competitive examination aspirants.
            </p>
          </article>

          <article className="feature-card">
            <span>📊</span>
            <h3>Track Your Performance</h3>
            <p>
              Challenge yourself and monitor your quiz performance as
              you continue practicing.
            </p>
          </article>

          <article className="feature-card">
            <span>🏆</span>
            <h3>Challenge Yourself</h3>
            <p>
              Test your knowledge and aim for better scores with every
              quiz.
            </p>
          </article>

        </div>

      </section>


      {/* =========================================
          FINAL CTA
      ========================================= */}
      <section
        className="home-cta"
        aria-labelledby="start-quiz-heading"
      >

        <h2
          id="start-quiz-heading"
          className="rainbow-text"
        >
          Ready to Challenge Yourself?
        </h2>

        <p>
          Start your quiz journey with QuizMaster and make learning
          more engaging every day.
        </p>

        <button
          type="button"
          onClick={() => navigate("/quiz")}
          aria-label="Start QuizMaster daily quiz"
        >
          🚀 Start Quiz
        </button>

      </section>

    </main>
  );
}

export default Home;