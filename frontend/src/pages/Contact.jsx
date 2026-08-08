import express from "express";
import * as brevo from "@getbrevo/brevo";

const router = express.Router();

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (cleanName.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid name.",
      });
    }

    if (cleanMessage.length < 5) {
      return res.status(400).json({
        success: false,
        message: "Message is too short.",
      });
    }

    if (cleanMessage.length > 2000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long.",
      });
    }

    // Create Brevo email
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.subject =
      `📩 New QuizMaster Contact Message from ${cleanName}`;

    sendSmtpEmail.htmlContent = `
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
          box-shadow:0 8px 30px rgba(0,0,0,.08);
        ">

          <div style="
            background:linear-gradient(135deg,#172554,#2563EB);
            padding:28px;
            color:white;
          ">
            <h1 style="margin:0;">
              📩 New Contact Message
            </h1>

            <p style="margin:8px 0 0;opacity:.85;">
              QuizMaster – India's Smart Quiz Platform
            </p>
          </div>

          <div style="padding:30px;">

            <h3>👤 Name</h3>
            <p>${escapeHtml(cleanName)}</p>

            <h3>📧 Email</h3>
            <p>${escapeHtml(cleanEmail)}</p>

            <h3>💬 Message</h3>

            <div style="
              background:#f8fafc;
              padding:18px;
              border-radius:10px;
              line-height:1.7;
              white-space:pre-wrap;
            ">
              ${escapeHtml(cleanMessage)}
            </div>

            <hr style="
              margin:25px 0;
              border:none;
              border-top:1px solid #e2e8f0;
            ">

            <p style="
              color:#94a3b8;
              font-size:12px;
            ">
              Sent from QuizMaster Contact Form.
            </p>

          </div>
        </div>
      </div>
    `;

    // Verified sender
    sendSmtpEmail.sender = {
      name: "QuizMaster",
      email: process.env.SMTP_FROM,
    };

    // Receiver
    sendSmtpEmail.to = [
      {
        email: process.env.CONTACT_RECEIVER,
        name: "QuizMaster Admin",
      },
    ];

    // Reply directly to visitor
    sendSmtpEmail.replyTo = {
      email: cleanEmail,
      name: cleanName,
    };

    // Send through Brevo API
    const result = await apiInstance.sendTransacEmail(
      sendSmtpEmail
    );

    console.log("✅ Brevo email sent:", result);

    return res.status(200).json({
      success: true,
      message:
        "Message sent successfully. We will get back to you soon.",
    });

  } catch (error) {
    console.error(
      "❌ Brevo Contact Error:",
      error?.response?.body ||
        error?.body ||
        error?.message ||
        error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to send message right now. Please try again later.",
    });
  }
});

// Escape HTML to prevent injected HTML in emails
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default router;