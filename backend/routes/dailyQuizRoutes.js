console.log("🔥 DAILY QUIZ ROUTE LOADED");
import express from "express";
import DailyQuiz from "../models/DailyQuiz.js";
import Question from "../models/Question.js";

const router = express.Router();

router.get("/today", async (req, res) => {

  try {

    const today = new Date().toLocaleDateString("en-CA", {
      timeZone: "Asia/Kolkata"
    });

    console.log("TODAY DATE:", today);

    const allQuiz = await DailyQuiz.find();
    console.log("DATABASE QUIZ:", allQuiz);


    let quiz = await DailyQuiz.findOne({
      date: today
    }).populate("questions");


    if (!quiz) {

      const randomQuestions = await Question.aggregate([
        {
          $sample: {
            size: 30
          }
        }
      ]);


      await DailyQuiz.create({

        date: today,

        questions: randomQuestions.map(q => q._id),

        startTime: new Date(),

        endTime: new Date(
          Date.now() + 24 * 60 * 60 * 1000
        )

      });


      quiz = await DailyQuiz.findOne({
        date: today
      }).populate("questions");


    }

console.log("QUIZ:", quiz);
console.log("START:", quiz.startTime);
console.log("END:", quiz.endTime);
    res.json({

      success: true,

      date: today,

      status: "LIVE",

      questions: quiz.questions,

      startTime: quiz.startTime,

      endTime: quiz.endTime

    });


  } catch(error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

});


export default router;