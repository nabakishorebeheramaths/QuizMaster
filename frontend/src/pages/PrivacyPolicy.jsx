
import React from "react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">

        {/* Header */}
        <div className="privacy-header">
          <div className="privacy-icon">🔒</div>

          <h1>Privacy Policy</h1>

          <p className="privacy-updated">
            Last Updated: August 2026
          </p>

          <p className="privacy-intro">
            At <strong>QuizMaster</strong>, we respect your privacy and are
            committed to protecting the information you share with us.
            This Privacy Policy explains how information is collected,
            used, stored, and protected when you use our educational
            platform.
          </p>
        </div>

        <div className="privacy-divider" />

        {/* Information We Collect */}
        <section className="privacy-section">
          <div className="section-number">01</div>

          <div>
            <h2>📌 Information We Collect</h2>

            <p>
              Depending on how you use QuizMaster, we may collect limited
              information necessary to provide and improve our services.
            </p>

            <ul>
              <li>
                <span>👤</span>
                <div>
                  <strong>Name</strong>
                  <small>Used to identify your QuizMaster account.</small>
                </div>
              </li>

              <li>
                <span>📧</span>
                <div>
                  <strong>Email Address</strong>
                  <small>
                    Used for account-related communication and support.
                  </small>
                </div>
              </li>

              <li>
                <span>🏆</span>
                <div>
                  <strong>Quiz Activity</strong>
                  <small>
                    Scores, quiz attempts, rankings, and performance data.
                  </small>
                </div>
              </li>

              <li>
                <span>🔐</span>
                <div>
                  <strong>Account Information</strong>
                  <small>
                    Information required to create and maintain your account.
                  </small>
                </div>
              </li>

              <li>
                <span>📱</span>
                <div>
                  <strong>Technical Information</strong>
                  <small>
                    Browser, device, and basic technical information may be
                    collected to improve website performance.
                  </small>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="privacy-section">
          <div className="section-number">02</div>

          <div>
            <h2>🎯 How We Use Your Information</h2>

            <p>
              The information we collect is used only for legitimate
              educational and operational purposes, including:
            </p>

            <div className="privacy-grid">
              <div className="privacy-mini-card">
                <span>📝</span>
                <h3>Quiz Services</h3>
                <p>
                  To provide daily quizzes, course quizzes, and exam
                  preparation content.
                </p>
              </div>

              <div className="privacy-mini-card">
                <span>🏆</span>
                <h3>Leaderboard</h3>
                <p>
                  To display rankings and encourage healthy academic
                  competition.
                </p>
              </div>

              <div className="privacy-mini-card">
                <span>📊</span>
                <h3>Performance</h3>
                <p>
                  To track quiz performance and help users understand their
                  progress.
                </p>
              </div>

              <div className="privacy-mini-card">
                <span>🛡️</span>
                <h3>Security</h3>
                <p>
                  To protect accounts and maintain the security of the
                  platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="privacy-section">
          <div className="section-number">03</div>

          <div>
            <h2>🍪 Cookies & Similar Technologies</h2>

            <p>
              QuizMaster may use cookies or similar technologies to remember
              preferences, maintain sessions, improve website functionality,
              understand general usage patterns, and provide a better user
              experience.
            </p>

            <div className="info-box">
              💡 <strong>Note:</strong> You may be able to control or disable
              cookies through your browser settings. Some website features
              may not function correctly if essential cookies are disabled.
            </div>
          </div>
        </section>

        {/* Third Party */}
        <section className="privacy-section">
          <div className="section-number">04</div>

          <div>
            <h2>🌐 Third-Party Services</h2>

            <p>
              QuizMaster may use trusted third-party services to operate,
              analyze, secure, and improve the platform.
            </p>

            <ul className="simple-list">
              <li>Google AdSense</li>
              <li>Google Analytics</li>
              <li>Authentication and security services</li>
              <li>Cloud hosting and database services</li>
              <li>Email and communication services</li>
            </ul>

            <p>
              These third-party services may have their own privacy policies
              and terms. We encourage users to review the applicable policies
              of those services.
            </p>
          </div>
        </section>

        {/* Advertising */}
        <section className="privacy-section">
          <div className="section-number">05</div>

          <div>
            <h2>📢 Advertising</h2>

            <p>
              QuizMaster may display advertisements through third-party
              advertising platforms such as Google AdSense. Advertising
              providers may use cookies or similar technologies to provide
              relevant advertisements and measure advertising performance,
              subject to their own policies and applicable settings.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section className="privacy-section">
          <div className="section-number">06</div>

          <div>
            <h2>🛡️ Data Security</h2>

            <p>
              We take reasonable technical and organizational measures to
              protect user information against unauthorized access,
              alteration, disclosure, or misuse.
            </p>

            <p>
              However, no internet-based service can guarantee complete
              security. Users should also take appropriate steps to protect
              their account credentials and login information.
            </p>
          </div>
        </section>

        {/* Data Retention */}
        <section className="privacy-section">
          <div className="section-number">07</div>

          <div>
            <h2>🗂️ Data Retention</h2>

            <p>
              We may retain account and quiz-related information for as long
              as reasonably necessary to provide our services, maintain
              records, resolve disputes, improve the platform, or comply with
              applicable legal requirements.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="privacy-section">
          <div className="section-number">08</div>

          <div>
            <h2>👨‍👩‍👧 Children's Privacy</h2>

            <p>
              QuizMaster provides educational content for learners across
              different age groups. Where required, younger users should use
              the platform with appropriate parental or guardian guidance.
            </p>

            <p>
              We do not intentionally request unnecessary personal
              information from children.
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="privacy-section">
          <div className="section-number">09</div>

          <div>
            <h2>⚖️ Your Rights</h2>

            <p>
              Depending on applicable laws, you may have rights regarding
              your personal information, including requesting correction,
              updating account information, or requesting deletion of
              information associated with your account.
            </p>

            <p>
              To make a request, please contact us using the information
              provided below.
            </p>
          </div>
        </section>

        {/* Changes */}
        <section className="privacy-section">
          <div className="section-number">10</div>

          <div>
            <h2>🔄 Changes to This Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time as our
              services, technologies, or legal requirements change.
            </p>

            <p>
              Any updated version will be published on this page with a
              revised "Last Updated" date.
            </p>
          </div>
        </section>

        {/* Contact */}
        <div className="privacy-contact">
          <div className="contact-icon">📩</div>

          <div>
            <h2>Questions About Privacy?</h2>

            <p>
              If you have questions, concerns, or requests regarding this
              Privacy Policy, please contact QuizMaster.
            </p>

            <a href="mailto:nabakishorebehera57@gmail.com">
              nabakishorebehera57@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="privacy-bottom">
          <p>
            By using <strong>QuizMaster</strong>, you acknowledge that you
            have read and understood this Privacy Policy.
          </p>

          <span>
            © {new Date().getFullYear()} QuizMaster. All Rights Reserved.
          </span>
        </div>

      </div>
    </div>
  );
}

export default PrivacyPolicy;
