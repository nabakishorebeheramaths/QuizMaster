import mongoose from "mongoose";

const dailyQuizSchema = new mongoose.Schema({
  date:{
    type:String,
    required:true,
    unique:true
  },

  questions:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Question"
    }
  ]

},{
  timestamps:true
});


const DailyQuiz = mongoose.model("DailyQuiz", dailyQuizSchema);

export default DailyQuiz;