import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [quizCompleted, setQuizCompleted] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [dailyQuiz, setDailyQuiz] = useState(null);


  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }


    // HISTORY
    const fetchHistory = async () => {

      try {

        if (!user?._id) return;


        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/quiz/history/${user._id}`
        );


        const history = res.data.attempts || [];


        setQuizCompleted(history.length);


        if(history.length > 0){

          const maxScore = Math.max(
            ...history.map(
              item => item.percentage || 0
            )
          );

          setBestScore(Math.round(maxScore));

        }


      }
      catch(error){

        console.log(
          "History Error:",
          error.response?.data || error.message
        );

      }

    };




    // DAILY QUIZ
    const fetchDailyQuiz = async () => {

      try {


        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/dailyquiz/today`
        );


        console.log(
          "DAILY QUIZ:",
          res.data
        );


        setDailyQuiz(res.data);


      }
      catch(error){

        console.log(
          "Daily Quiz Error:",
          error.response?.data || error.message
        );

      }

    };



    fetchHistory();
    fetchDailyQuiz();


  }, [navigate]);




return (

<section className="dashboard">


<div className="dashboard-header">

<div>

<h1>
Welcome, {user?.name || "Guest"} 👋
</h1>

<p>
Ready to test your knowledge today?
</p>

</div>



<div>

<button onClick={()=>navigate("/quiz")}>
🚀 Start Quiz
</button>


<button
onClick={()=>{

localStorage.clear();

navigate("/login");

}}
>
Logout
</button>


</div>


</div>




{/* LIVE DAILY QUIZ CARD */}

<div className="live-quiz-card">

<div className="live-header">

<h2>
🔥 Daily Live Quiz
</h2>

<span className="live-badge">
🟢 LIVE
</span>

</div>



{
dailyQuiz ? (

<>


<div className="quiz-info">


<div className="info-box">

<h4>📅 Date</h4>

<p>
{dailyQuiz.date}
</p>

</div>



<div className="info-box">

<h4>⏰ Start Time</h4>

<p>
{new Date(dailyQuiz.startTime).toLocaleTimeString()}
</p>

</div>



<div className="info-box">

<h4>🏁 End Time</h4>

<p>
{new Date(dailyQuiz.endTime).toLocaleTimeString()}
</p>

</div>



<div className="info-box">

<h4>📝 Questions</h4>

<p>
{dailyQuiz.questions?.length || 0}
</p>

</div>



</div>



<div className="quiz-status">


<h3>
Today's Challenge is Ready 🚀
</h3>


<p>
Attempt today's quiz and improve your score.
</p>


<button 
onClick={()=>navigate("/quiz")}
>

🚀 Start Live Quiz

</button>


</div>


</>


)

:

(

<h3>
Loading Today's Quiz...
</h3>

)

}


</div>

</section>

);


}


export default Dashboard;