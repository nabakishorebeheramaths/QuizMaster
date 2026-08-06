import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_LOGIN,
      pass: process.env.BREVO_KEY,
    },
  });

  await transporter.sendMail({
    from: "QuizMaster <nabakishorebehera57@gmail.com>",
    to,
    subject,
    text,
  });

};

export default sendEmail;