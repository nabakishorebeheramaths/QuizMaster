import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
  try {
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS:", process.env.SMTP_PASS ? "FOUND" : "MISSING");
    console.log("SMTP_FROM:", process.env.SMTP_FROM);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
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