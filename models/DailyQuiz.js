import express from "express";
import Question from "../models/Question.js";
import DailyQuiz from "../models/DailyQuiz.js";

const router = express.Router();


router.get("/", async (req, res) => {

  try {

    const today = new Date()
      .toISOString()
      .split("T")[0];


    let dailyQuiz = await DailyQuiz.findOne({
      date: today
    }).populate("questions");


    // Agar aaj ka quiz nahi bana hai
    if (!dailyQuiz) {


      const totalQuestions = await Question.countDocuments();

const randomQuestions = await Question.aggregate([
  {
    $sample:{
      size: Math.min(30, totalQuestions)
    }
  }
]);
      dailyQuiz = await DailyQuiz.create({

        date: today,

        questions: randomQuestions.map(
          q => q._id
        )

      });


      dailyQuiz = await DailyQuiz.findOne({
        date: today
      }).populate("questions");

    }


    res.json({

      success:true,

      count:dailyQuiz.questions.length,

      questions:dailyQuiz.questions

    });


  } catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

});


export default router;