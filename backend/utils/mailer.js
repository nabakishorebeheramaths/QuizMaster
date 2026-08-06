import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
    family: 4, // Force IPv4
  },
});

transporter.verify((err) => {
  if (err) {
    console.log("Mail Error:", err);
  } else {
    console.log("Mail Server Ready ✅");
  }
});

export const sendOTP = async (email, otp) => {
  await transporter.sendMail({
    from: `"QuizMaster" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "QuizMaster - Email Verification OTP",
    html: `
      <h2>Welcome to QuizMaster 🎉</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP is valid for 5 minutes.</p>
    `,
  });
};