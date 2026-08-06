import nodemailer from "nodemailer";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      family: 4,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"QuizMaster 🧠" <${process.env.SMTP_FROM}>`,
      to,
      subject,
      text,
    });

    console.log("Email sent successfully");

  } catch (error) {
    console.log("Email sending failed:", error.message);
    throw error;
  }
};

export default sendEmail;