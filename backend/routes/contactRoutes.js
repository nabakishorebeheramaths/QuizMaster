import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

/*
========================================
SMTP TRANSPORTER
========================================
*/

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },

  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 15000,
});

/*
========================================
POST /api/contact
========================================
*/

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanMessage = String(message).trim();

    // Name validation
    if (cleanName.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid name.",
      });
    }

    if (cleanName.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Name is too long.",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Message validation
    if (cleanMessage.length < 5) {
      return res.status(400).json({
        success: false,
        message: "Message must contain at least 5 characters.",
      });
    }

    if (cleanMessage.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "Message cannot exceed 1000 characters.",
      });
    }

    /*
    ====================================
    SEND EMAIL
    ====================================
    */

    await transporter.sendMail({
      from: `"QuizMaster Contact" <${process.env.SMTP_FROM}>`,

      to:
        process.env.CONTACT_RECEIVER ||
        process.env.SMTP_FROM,

      replyTo: cleanEmail,

      subject: `📩 New QuizMaster Message from ${cleanName}`,

      text: `
New Contact Message - QuizMaster

Name:
${cleanName}

Email:
${cleanEmail}

Message:
${cleanMessage}

--------------------------------
QuizMaster Contact System
      `,

      html: `
        <div style="
          font-family:Arial,sans-serif;
          background:#f4f7fb;
          padding:30px;
        ">

          <div style="
            max-width:650px;
            margin:auto;
            background:#ffffff;
            border-radius:16px;
            overflow:hidden;
            box-shadow:0 8px 30px rgba(0,0,0,0.08);
          ">

            <div style="
              background:linear-gradient(
                135deg,
                #172554,
                #2563EB
              );
              padding:28px;
              color:white;
            ">

              <h1 style="
                margin:0;
                font-size:26px;
              ">
                📩 New Contact Message
              </h1>

              <p style="
                margin:8px 0 0;
                opacity:0.85;
              ">
                QuizMaster – India's Smart Quiz Platform
              </p>

            </div>

            <div style="padding:30px;">

              <div style="
                margin-bottom:20px;
                padding:16px;
                background:#f8fafc;
                border-radius:10px;
              ">
                <strong style="color:#475569;">
                  👤 Name
                </strong>

                <p style="
                  margin:7px 0 0;
                  font-size:16px;
                  color:#0f172a;
                ">
                  ${escapeHtml(cleanName)}
                </p>
              </div>

              <div style="
                margin-bottom:20px;
                padding:16px;
                background:#f8fafc;
                border-radius:10px;
              ">
                <strong style="color:#475569;">
                  📧 Email
                </strong>

                <p style="
                  margin:7px 0 0;
                  font-size:16px;
                  color:#0f172a;
                ">
                  ${escapeHtml(cleanEmail)}
                </p>
              </div>

              <div style="
                padding:16px;
                background:#f8fafc;
                border-radius:10px;
              ">
                <strong style="color:#475569;">
                  💬 Message
                </strong>

                <p style="
                  margin:12px 0 0;
                  font-size:15px;
                  line-height:1.7;
                  color:#334155;
                  white-space:pre-wrap;
                ">
                  ${escapeHtml(cleanMessage)}
                </p>
              </div>

              <div style="
                margin-top:25px;
                padding-top:20px;
                border-top:1px solid #e2e8f0;
                color:#94a3b8;
                font-size:12px;
              ">
                Sent from QuizMaster Contact Form.
              </div>

            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message:
        "Message sent successfully. We will get back to you soon.",
    });

  } catch (error) {
    console.error("❌ Contact email error:", error.message);

    return res.status(500).json({
      success: false,
      message:
        "Unable to send message right now. Please try again later.",
    });
  }
});

/*
========================================
HTML ESCAPE
========================================
*/

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default router;