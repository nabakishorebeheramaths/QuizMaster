import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error(
        "MONGO_URI is missing. Please check your .env file."
      );
    }

    await mongoose.connect(mongoURI);

    console.log("🍃 MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:");
    console.error(error.message);

    process.exit(1);
  }
};

export default connectDB;