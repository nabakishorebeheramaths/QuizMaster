import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
{
  question:{
    type:String,
    required:true
  },

  options:[
    {
      type:String,
      required:true
    }
  ],

  correctAnswer:{
    type:Number,
    required:true
  },

  category:{
    type:String,
    required:true
  },

  difficulty:{
    type:String,
    enum:["Easy","Medium","Hard"],
    default:"Medium"
  }
},
{
 timestamps:true
}
);


export default mongoose.model("Question", questionSchema);