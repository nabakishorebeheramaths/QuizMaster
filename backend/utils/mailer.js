import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

console.log("Mailer EMAIL_USER:", process.env.EMAIL_USER);
console.log("Mailer EMAIL_PASS:", process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Mail Error:", error);
  } else {
    console.log("Mail Server Ready ✅");
  }
});

export const sendOTP = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "QuizMaster - Email Verification OTP",
    html: `
      <h2>Welcome to QuizMaster 🎉</h2>
      <h1>${otp}</h1>
    `,
  });
};