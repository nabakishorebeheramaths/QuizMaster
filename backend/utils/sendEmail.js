import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
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