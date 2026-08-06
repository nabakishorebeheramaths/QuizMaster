import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
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