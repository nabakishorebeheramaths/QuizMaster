import express from "express";
import DailyQuiz from "../models/DailyQuiz.js";
import Question from "../models/Question.js";

const router = express.Router();


router.get("/today", async(req,res)=>{

try{

const today = new Date().toISOString().split("T")[0];


let quiz = await DailyQuiz.findOne({
    date: today
}).populate("questions");


if(!quiz){

const randomQuestions = await Question.aggregate([
{
 $sample:{
    size:30
 }
}
]);


quiz = await DailyQuiz.create({

date: today,

questions: randomQuestions.map(q=>q._id)

});


quiz = await DailyQuiz.findOne({
date:today
}).populate("questions");


}


res.json({

success:true,

date:quiz.date,

status:"LIVE",

questions:quiz.questions,

startTime:quiz.startTime,

endTime:quiz.endTime


});


}
catch(error){

res.status(500).json({
message:error.message
})

}


});


export default router;