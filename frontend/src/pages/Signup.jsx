import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function Signup() {
  console.log(import.meta.env.VITE_API_URL);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);

const handleSendOTP = async () => {
  if (!email) {
    alert("Please enter your email");
    return;
  }

  try {
    setOtpLoading(true);

    const res = await axios.post(
      `${API_URL}/auth/send-otp`,
      { email }
    );

    alert(res.data.message);
    setOtpSent(true);

  } catch (error) {
    alert(error.response?.data?.message || "Failed to send OTP");
  } finally {
    setOtpLoading(false);
  }
};
const handleVerifyOTP = async () => {
  if (!otp) {
    alert("Please enter OTP");
    return;
  }

  try {
    const res = await axios.post(
      `${API_URL}/auth/verify-otp`,
      {
        email,
        otp,
      }
    );

    alert(res.data.message);
    setOtpVerified(true);

  } catch (error) {
    alert(
      error.response?.data?.message ||
      "OTP verification failed"
    );
  }
};
  const handleSignup = async () => {
  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (!otpVerified) {
    alert("Please verify OTP first");
    return;
  }

  try {
    setLoading(true);

    const res = await axios.post(
      `${API_URL}/auth/signup`,
      {
        name,
        email,
        password,
      }
    );

    alert(res.data.message);
    navigate("/login");

  } catch (error) {
    alert(error.response?.data?.message || "Signup Failed");
  } finally {
    setLoading(false);
  }
};


  return (

    <section className="signup-page">


      <div className="signup-left">


        <div className="brand">
          🧠 QuizMaster
        </div>


        <h1>
          Start Your
          <br />
          <span>Learning Journey.</span>
        </h1>


        <p>
          Create your account and unlock thousands of
          quizzes, improve your knowledge and track your
          progress.
        </p>



        <div className="signup-features">


          <div>
            🚀
            <span>
              Smart Quizzes
            </span>
          </div>


          <div>
            🏆
            <span>
              Track Scores
            </span>
          </div>


          <div>
            📚
            <span>
              Multiple Categories
            </span>
          </div>


        </div>


      </div>





      <div className="signup-right">

<form
  className="signup-box"
  onSubmit={(e) => {
    e.preventDefault();
    handleSignup();
  }}
>

          <h1>
            Create Account ✨
          </h1>


          <p>
            Join QuizMaster today
          </p>



          <input
  type="text"
  placeholder="Enter Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
  autoComplete="name"
/>


<input
  type="email"
  placeholder="Enter Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  autoComplete="email"
  disabled={otpVerified}
/>

<div style={{ marginTop: "10px", marginBottom: "10px" }}>
  <button
  type="button"
  onClick={handleSendOTP}
  disabled={otpLoading || otpVerified}
>
    {otpLoading ? "Sending OTP..." : "Send OTP"}
  </button>
</div>
{otpSent && (
  <>
    <input
      type="text"
      placeholder="Enter OTP"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      required
    />

    <button
      type="button"
      onClick={handleVerifyOTP}
      disabled={otpVerified}
    >
      {otpVerified ? "OTP Verified ✅" : "Verify OTP"}
    </button>
  </>
)}

          <input
  type={showPassword ? "text" : "password"}
  placeholder="Create Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  autoComplete="new-password"
/>




         <div className="show-password">
  <input
    type="checkbox"
    checked={showPassword}
    onChange={() => setShowPassword(!showPassword)}
  />

  <span>Show Password</span>
</div>

<button
  type="submit"
  disabled={loading || !otpVerified}
>
  {loading ? "Creating Account..." : "Create Account 🚀"}
</button>

<p className="login-text">
  Already have an account?

  <span onClick={() => navigate("/login")}>
    {" "}Login
  </span>
</p>

</form>




        </div>






    </section>

  );
}


export default Signup;