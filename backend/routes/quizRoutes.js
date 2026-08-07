import express from "express";
import QuizAttempt from "../models/QuizAttempt.js";

const router = express.Router();


// Submit Quiz
router.post("/submit", async (req, res) => {

  console.log("🔥 /quiz/submit called");
  console.log(req.body);

  try {

    const {
  user,
  userName,
  score,
  totalQuestions,
  answers,
} = req.body;

    if (!user || score === undefined || !totalQuestions) {
      return res.status(400).json({
        success: false,
        message: "Missing quiz data"
      });
    }

    const percentage = Number(
      ((score / totalQuestions) * 100).toFixed(2)
    );

    const attempt = await QuizAttempt.create({
  user,
  userName,
  date: new Date().toISOString().split("T")[0],
  score,
  totalQuestions,
  percentage,
  answers,
});

    console.log("✅ Quiz Attempt Saved:", attempt._id);

    res.status(201).json({
      success: true,
      message: "Quiz submitted successfully",
      attempt
    });

  } catch (error) {

    console.log("❌ Submit Error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

});

// Get Quiz History
router.get("/history/:userId", async (req, res) => {

  try {

    const attempts = await QuizAttempt.find({
      user: req.params.userId
    })
    .sort({ createdAt: -1 });


    res.json({
      success: true,
      count: attempts.length,
      attempts
    });


  } catch (error) {

    console.log("❌ History Error:", error.message);

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

});
// Today's Leaderboard
router.get("/leaderboard", async (req, res) => {

try {

const today = new Date().toISOString().split("T")[0];

const leaderboard = await QuizAttempt.find({
  date: today,
})
.populate("user", "name")
.sort({
  percentage: -1,
  score: -1,
})
.limit(50);

console.log("LEADERBOARD DATA:", leaderboard);

res.json({
  success:true,
  leaderboard
});

} catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

});
// Get User Rank
router.get("/rank/:userId", async (req, res) => {

  try {

    const today = new Date().toISOString().split("T")[0];

    const leaderboard = await QuizAttempt.find({
      date: today,
    })
    .sort({
      percentage: -1,
      score: -1,
    });


    const index = leaderboard.findIndex(
      item => item.user.toString() === req.params.userId
    );


    if (index === -1) {
      return res.json({
        rank: null
      });
    }


    res.json({
      rank: index + 1,
      score: leaderboard[index].percentage
    });


  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

});

export default router;