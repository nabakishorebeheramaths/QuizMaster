import mongoose from "mongoose";

const verifiedEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  verified: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, // 10 minutes baad auto delete
  },
});

export default mongoose.model(
  "VerifiedEmail",
  verifiedEmailSchema
);