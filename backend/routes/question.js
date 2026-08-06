import express from "express";
import Question from "../models/Question.js";
import DailyQuiz from "../models/DailyQuiz.js";

const router = express.Router();


// Get Today's Quiz
router.get("/", async (req, res) => {

  try {

    const today = new Date().toISOString().split("T")[0];


    // Check today's quiz already exists
    let dailyQuiz = await DailyQuiz.findOne({
      date: today
    }).populate("questions");


    // If not exists create new quiz
    if (!dailyQuiz) {


      const randomQuestions = await Question.aggregate([
        {
          $sample:{
            size:30
          }
        }
      ]);


      dailyQuiz = await DailyQuiz.create({

        date: today,

        questions: randomQuestions.map(
          (q)=>q._id
        )

      });


      dailyQuiz = await DailyQuiz.findOne({
        date: today
      }).populate("questions");

    }


    res.status(200).json({

      success:true,

      date: dailyQuiz.date,

      status:"LIVE",

      count: dailyQuiz.questions.length,

      questions: dailyQuiz.questions

    });


  } catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

});


export default router;