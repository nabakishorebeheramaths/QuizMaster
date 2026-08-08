import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CourseQuiz from "./pages/CourseQuiz";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>

        {/* =========================
            PUBLIC ROUTES
        ========================= */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* =========================
            PROTECTED DAILY QUIZ
        ========================= */}

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />


        {/* =========================
            RESULT
        ========================= */}

        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <Result />
            </ProtectedRoute>
          }
        />


        {/* =========================
            DASHBOARD
        ========================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* =========================
            LEADERBOARD
        ========================= */}

        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />


        {/* =========================
            ALL COURSES
        =========================
            Example:
            /course
        ========================= */}

        <Route
          path="/course"
          element={
            <ProtectedRoute>
              <CourseQuiz />
            </ProtectedRoute>
          }
        />


        {/* =========================
            SPECIFIC COURSE
        =========================
            Examples:
            /course/jee
            /course/neet
            /course/btech
            /course/class-10
            /course/bsc-nursing
        ========================= */}

        <Route
          path="/course/:courseId"
          element={
            <ProtectedRoute>
              <CourseQuiz />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </>
  );
}

export default App;