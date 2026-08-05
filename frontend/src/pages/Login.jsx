import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
const API_URL = import.meta.env.VITE_API_URL;
function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");;
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    setLoading(true);

    const res = await axios.post(
      `${API_URL}/auth/login`,
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    alert("Login Successful 🎉");

    navigate("/dashboard");

  } catch (error) {

    alert(
      error.response?.data?.message || "Login Failed"
    );

  } finally {
    setLoading(false);
  }
};

  return (
    <section className="login-page">

      <div className="login-left">

        <div className="brand">
          🧠 QuizMaster
        </div>

        <h1>
          Test Your Knowledge.
          <br />
          <span>Become a Master.</span>
        </h1>

        <p>
          Join thousands of learners and improve your skills
          with interactive quizzes, instant results and smart
          learning experience.
        </p>


        <div className="stats">

          <div>
            <h2>1000+</h2>
            <span>Questions</span>
          </div>

          <div>
            <h2>10+</h2>
            <span>Categories</span>
          </div>

          <div>
            <h2>∞</h2>
            <span>Learning</span>
          </div>

        </div>


      </div>



      <div className="login-right">

        <form
  className="login-box"
  onSubmit={(e) => {
    e.preventDefault();
    handleLogin();
  }}
>

         <input
  type="email"
  placeholder="Enter Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  autoComplete="email"
/>

<input
  type={showPassword ? "text" : "password"}
  placeholder="Enter Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  autoComplete="current-password"
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
  disabled={loading}
>
  {loading ? "Logging In..." : "Login 🚀"}
</button>

<p className="signup-text">
  Don't have an account?
  <span onClick={() => navigate("/signup")}>
    {" "}Create Account
  </span>
</p>

</form>

      </div>

    </section>
  );
}

export default Login;