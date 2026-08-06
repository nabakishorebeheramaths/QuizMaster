import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import otpGenerator from "otp-generator";
import Otp from "../models/Otp.js";
import sendEmail from "../utils/sendEmail.js";
import VerifiedEmail from "../models/VerifiedEmail.js";

const router = express.Router();

// =================== SIGNUP ===================
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
const verifiedEmail = await VerifiedEmail.findOne({ email });

if (!verifiedEmail) {
  return res.status(400).json({
    message: "Please verify your email first",
  });
}
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    await VerifiedEmail.deleteOne({ email });
    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// =================== SEND OTP ===================
router.post("/send-otp", async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    await Otp.deleteMany({ email });

    await Otp.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    await sendEmail(
  email,
  "QuizMaster Email Verification OTP",
  `Your QuizMaster verification OTP is ${otp}. It will expire in 5 minutes.`
);

    res.status(200).json({
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});


// =================== VERIFY OTP ===================
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    const otpRecord = await Otp.findOne({ email });

    if (!otpRecord) {
      return res.status(400).json({
        message: "OTP not found. Please request a new OTP.",
      });
    }

    if (new Date() > otpRecord.expiresAt) {
      await Otp.deleteOne({ _id: otpRecord._id });

      return res.status(400).json({
        message: "OTP has expired",
      });
    }

    if (otpRecord.otp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // OTP verified, delete it
await Otp.deleteOne({ _id: otpRecord._id });

// Save verified email
await VerifiedEmail.findOneAndUpdate(
  { email },
  { email, verified: true },
  { upsert: true, new: true }
);

res.status(200).json({
  message: "OTP verified successfully",
});

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// =================== LOGIN ===================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;