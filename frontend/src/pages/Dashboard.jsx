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



    const fetchHistory = async () => {

      try {

        if(!user?._id) return;


        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/quiz/history/${user._id}`
        );


        const history = res.data.attempts || [];


        setQuizCompleted(history.length);



        if(history.length > 0){

          const highest = Math.max(
            ...history.map(item => item.percentage)
          );


          setBestScore(Math.round(highest));

        }
        else{

          setBestScore(0);

        }


      }
      catch(error){

        console.log("History Error:",error);

      }

    };





    const fetchDailyQuiz = async () => {

      try {


        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/dailyquiz/today`
        );


        console.log("LIVE QUIZ DATA:",res.data);


        setDailyQuiz(res.data);


      }
      catch(error){

        console.log("Daily Quiz Error:",error);

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




<div style={{display:"flex",gap:"10px"}}>


<button onClick={()=>navigate("/quiz")}>
Start Quiz 🚀
</button>



<button
onClick={()=>{

localStorage.removeItem("token");
localStorage.removeItem("user");

navigate("/login");

}}
>

Logout

</button>


</div>


</div>





{/* DAILY LIVE QUIZ */}


<div className="live-quiz-card">


<h2>
🔥 Today's Live Quiz
</h2>



{
dailyQuiz ? (

<>


<h3>
📅 Date: {dailyQuiz.date}
</h3>


<p>
🟢 Status:
<b> {dailyQuiz.status}</b>
</p>


<p>
📝 Questions:
{dailyQuiz.questions?.length || 0}
</p>



<p>
⏰ Time: 12:00 AM - 11:59 PM
</p>



<button onClick={()=>navigate("/quiz")}>

🚀 Start Live Quiz

</button>


</>


)
:
(
<p>
Loading today's quiz...
</p>
)

}


</div>







<div className="stats-card">


<div>
<h2>1000+</h2>
<p>Questions</p>
</div>



<div>
<h2>10+</h2>
<p>Categories</p>
</div>



<div>
<h2>{quizCompleted}</h2>
<p>Quiz Completed</p>
</div>



<div>
<h2>{bestScore}%</h2>
<p>Best Score</p>
</div>



</div>





<h2 className="title">
Choose Category
</h2>




<div className="categories">


<div className="category-card">
<span>🧠</span>
<h3>General Knowledge</h3>
<p>Test your awareness</p>
</div>



<div className="category-card">
<span>💻</span>
<h3>Programming</h3>
<p>Coding & technology</p>
</div>



<div className="category-card">
<span>🔬</span>
<h3>Science</h3>
<p>Explore discoveries</p>
</div>



<div className="category-card">
<span>⚡</span>
<h3>Electronics</h3>
<p>ECE & innovation</p>
</div>



</div>



</section>

  );

}


export default Dashboard;