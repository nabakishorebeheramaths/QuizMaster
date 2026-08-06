import express from "express";
import DailyQuiz from "../models/DailyQuiz.js";
import Question from "../models/Question.js";

const router = express.Router();


router.get("/today", async (req, res) => {

try {

const today = new Date(
  Date.now() + (5.5 * 60 * 60 * 1000)
).toISOString().split("T")[0];

console.log("TODAY DATE:", today);


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

questions: randomQuestions.map(q=>q._id),

startTime: new Date(),

endTime: new Date(Date.now() + 24 * 60 * 60 * 1000)

});


quiz = await DailyQuiz.findOne({
    date: today
}).populate("questions");


}


res.json({

success:true,

date: today,

status:"LIVE",

questions:quiz.questions,

startTime:quiz.startTime,

endTime:quiz.endTime

});


}
catch(error){

console.log(error);

res.status(500).json({
message:error.message
});

}


});


export default router;