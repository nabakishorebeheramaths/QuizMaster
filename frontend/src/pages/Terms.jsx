
import React from "react";
import "./Terms.css";

function Terms() {
  return (
    <div className="terms-page">
      <div className="terms-container">

        {/* Header */}
        <div className="terms-header">
          <div className="terms-icon">📜</div>

          <h1>Terms & Conditions</h1>

          <p className="terms-updated">
            Last Updated: August 2026
          </p>

          <p className="terms-intro">
            Welcome to <strong>QuizMaster</strong>. These Terms & Conditions
            explain the rules and responsibilities that apply when you access
            or use our educational platform. By using QuizMaster, you agree
            to follow these terms.
          </p>
        </div>

        <div className="terms-divider" />

        {/* 01 */}
        <section className="terms-section">
          <div className="terms-number">01</div>

          <div>
            <h2>📚 Use of Website</h2>

            <p>
              QuizMaster is an educational platform designed to provide
              quizzes, learning resources, practice questions, performance
              tracking, and preparation support for students and competitive
              exam aspirants.
            </p>

            <p>
              You agree to use QuizMaster only for lawful and educational
              purposes and in accordance with these Terms & Conditions.
            </p>
          </div>
        </section>

        {/* 02 */}
        <section className="terms-section">
          <div className="terms-number">02</div>

          <div>
            <h2>👤 User Accounts</h2>

            <p>
              Some features of QuizMaster may require you to create an
              account. You are responsible for providing accurate information
              and keeping your login credentials secure.
            </p>

            <div className="terms-info-box">
              🔐 <strong>Account Security:</strong> Do not share your
              password, OTP, authentication information, or other account
              credentials with anyone.
            </div>

            <p>
              You are responsible for activities performed through your
              account. If you believe your account has been accessed
              without authorization, please contact us promptly.
            </p>
          </div>
        </section>

        {/* 03 */}
        <section className="terms-section">
          <div className="terms-number">03</div>

          <div>
            <h2>📝 Quiz & Educational Content</h2>

            <p>
              QuizMaster provides questions and educational content for
              learning, revision, practice, and examination preparation.
            </p>

            <p>
              We make reasonable efforts to maintain the quality and accuracy
              of our content. However, educational content may occasionally
              contain errors, outdated information, or differences from
              official examination patterns.
            </p>

            <div className="terms-warning">
              ⚠️ <strong>Important:</strong> QuizMaster should be used as a
              supplementary learning and practice platform and should not be
              considered the sole source of preparation for any examination.
            </div>
          </div>
        </section>

        {/* 04 */}
        <section className="terms-section">
          <div className="terms-number">04</div>

          <div>
            <h2>🏆 Leaderboard & Fair Play</h2>

            <p>
              QuizMaster may provide leaderboards, rankings, scores, and other
              performance-based features to encourage healthy competition.
            </p>

            <div className="fair-play-grid">
              <div>
                <span>✅</span>
                <strong>Play Fair</strong>
                <p>Answer questions honestly.</p>
              </div>

              <div>
                <span>🚫</span>
                <strong>No Manipulation</strong>
                <p>Do not manipulate scores or rankings.</p>
              </div>

              <div>
                <span>🛡️</span>
                <strong>No Exploits</strong>
                <p>Do not abuse technical vulnerabilities.</p>
              </div>

              <div>
                <span>🤝</span>
                <strong>Respect Others</strong>
                <p>Maintain healthy competition.</p>
              </div>
            </div>

            <p>
              Attempts to manipulate quiz results, exploit bugs, use
              unauthorized automated methods, or interfere with the service
              may result in temporary suspension or permanent termination of
              an account.
            </p>
          </div>
        </section>

        {/* 05 */}
        <section className="terms-section">
          <div className="terms-number">05</div>

          <div>
            <h2>©️ Intellectual Property</h2>

            <p>
              Unless otherwise stated, QuizMaster's website design, branding,
              logo, graphics, original content, quiz structure, and other
              platform materials are protected by applicable intellectual
              property laws.
            </p>

            <p>
              You may not reproduce, copy, modify, distribute, publish,
              commercially exploit, or redistribute QuizMaster content without
              appropriate authorization.
            </p>
          </div>
        </section>

        {/* 06 */}
        <section className="terms-section">
          <div className="terms-number">06</div>

          <div>
            <h2>🚫 Prohibited Activities</h2>

            <p>
              Users must not use QuizMaster to:
            </p>

            <ul className="prohibited-list">
              <li>Attempt unauthorized access to the platform.</li>
              <li>Manipulate quiz scores or leaderboard rankings.</li>
              <li>Use bots, scripts, or automated tools to abuse the service.</li>
              <li>Upload malicious or harmful content.</li>
              <li>Interfere with the normal operation of the website.</li>
              <li>Copy or redistribute protected QuizMaster content.</li>
              <li>Use the platform for unlawful activities.</li>
            </ul>
          </div>
        </section>

        {/* 07 */}
        <section className="terms-section">
          <div className="terms-number">07</div>

          <div>
            <h2>🌐 Third-Party Services</h2>

            <p>
              QuizMaster may use third-party services for hosting, analytics,
              authentication, email communication, advertising, databases,
              and other technical functions.
            </p>

            <p>
              Third-party services may operate under their own terms and
              privacy policies. QuizMaster is not responsible for the
              independent policies or practices of external services.
            </p>
          </div>
        </section>

        {/* 08 */}
        <section className="terms-section">
          <div className="terms-number">08</div>

          <div>
            <h2>📢 Advertisements</h2>

            <p>
              QuizMaster may display advertisements through third-party
              advertising networks. Advertisements may be selected or
              personalized according to the policies and technologies used by
              those advertising providers.
            </p>

            <p>
              QuizMaster does not necessarily endorse every product,
              service, or external website displayed through advertisements.
            </p>
          </div>
        </section>

        {/* 09 */}
        <section className="terms-section">
          <div className="terms-number">09</div>

          <div>
            <h2>⚠️ Availability & Service Changes</h2>

            <p>
              We aim to keep QuizMaster available and reliable, but we cannot
              guarantee uninterrupted or error-free access at all times.
            </p>

            <p>
              Features, quizzes, courses, content, schedules, or other parts
              of the platform may be modified, temporarily unavailable, or
              discontinued when necessary.
            </p>
          </div>
        </section>

        {/* 10 */}
        <section className="terms-section">
          <div className="terms-number">10</div>

          <div>
            <h2>⚖️ Limitation of Liability</h2>

            <p>
              QuizMaster is provided for educational and informational
              purposes. To the extent permitted by applicable law, QuizMaster
              shall not be responsible for direct or indirect losses,
              interruptions, inaccuracies, or inconvenience resulting from
              the use of the platform.
            </p>

            <p>
              Users are responsible for making their own decisions regarding
              examination preparation, educational choices, and use of
              information obtained through the platform.
            </p>
          </div>
        </section>

        {/* 11 */}
        <section className="terms-section">
          <div className="terms-number">11</div>

          <div>
            <h2>🔄 Changes to These Terms</h2>

            <p>
              QuizMaster may update these Terms & Conditions from time to time
              to reflect changes in the platform, services, technology, or
              applicable requirements.
            </p>

            <p>
              Updated terms will be published on this page along with a
              revised "Last Updated" date.
            </p>
          </div>
        </section>

        {/* 12 */}
        <section className="terms-section">
          <div className="terms-number">12</div>

          <div>
            <h2>❌ Account Suspension or Termination</h2>

            <p>
              QuizMaster may restrict, suspend, or terminate access to an
              account when there is a reasonable basis to believe that the
              user has violated these Terms & Conditions, abused the service,
              attempted fraud, or engaged in activities that may harm the
              platform or other users.
            </p>
          </div>
        </section>

        {/* Contact */}
        <div className="terms-contact">
          <div className="terms-contact-icon">📩</div>

          <div>
            <h2>Questions About These Terms?</h2>

            <p>
              If you have any questions, suggestions, or concerns regarding
              these Terms & Conditions, please contact us.
            </p>

            <a href="mailto:nabakishorebehera57@gmail.com">
              nabakishorebehera57@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="terms-bottom">
          <p>
            By accessing or using <strong>QuizMaster</strong>, you confirm
            that you have read, understood, and agreed to these Terms &
            Conditions.
          </p>

          <span>
            © {new Date().getFullYear()} QuizMaster. All Rights Reserved.
          </span>
        </div>

      </div>
    </div>
  );
}

export default Terms;
