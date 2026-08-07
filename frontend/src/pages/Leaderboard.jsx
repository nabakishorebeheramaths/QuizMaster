import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css";


function Leaderboard() {

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  const fetchLeaderboard = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
        "http://localhost:5000/api/leaderboard"
      );


      if(response.data && Array.isArray(response.data)){
        setPlayers(response.data);
      }
      else if(response.data.players){
        setPlayers(response.data.players);
      }
      else{
        setPlayers([]);
      }


      setError("");

    }
    catch(err){

      console.log(err);

      setError(
        "Leaderboard data load nahi ho paya"
      );

      setPlayers([]);

    }
    finally{

      setLoading(false);

    }

  };




  useEffect(()=>{


    fetchLeaderboard();


    const timer = setInterval(()=>{

      fetchLeaderboard();

    },30000);



    return ()=>clearInterval(timer);



  },[]);





  const topThree = players.slice(0,3);


  const remainingPlayers = players.slice(3);





  const getMedal = (index)=>{


    if(index===0)
      return "🥇";


    if(index===1)
      return "🥈";


    if(index===2)
      return "🥉";


    return "";

  };





  return (

<div className="leaderboard-page">


<div className="leaderboard-header">

<h1>
🏆 QuizMaster Leaderboard
</h1>


<p>
Today's Top Performers
</p>


<button
className="refresh-btn"
onClick={fetchLeaderboard}
>
🔄 Refresh
</button>


</div>





{
loading &&

<div className="loading-card">

<h2>
Loading leaderboard...
</h2>

</div>

}






{
error &&

<div className="error-card">

<h2>
⚠️ {error}
</h2>

</div>

}






{
!loading &&
players.length===0 &&


<div className="empty-card">


<h2>
🎯 No Participants Today
</h2>


<p>
Be the first one to attempt today's quiz.
</p>


</div>


}






{
!loading &&
players.length>0 &&


<>


<div className="podium-section">


{
topThree.map((player,index)=>(


<div
className={`player-card rank-${index+1}`}
key={player._id || index}
>


<div className="medal">

{getMedal(index)}

</div>



<h2>

{player.name || "Unknown Player"}

</h2>



<h3>

{player.score || 0}

<span>
 points
</span>

</h3>



<p>

Rank #{index+1}

</p>


</div>


))

}



</div>





<div className="participants-section">


<h2>
👥 Today's Participants
</h2>



<div className="table-card">


<table>


<thead>

<tr>

<th>
Rank
</th>


<th>
Player
</th>


<th>
Score
</th>


<th>
Accuracy
</th>


</tr>


</thead>



<tbody>


{
players.map((player,index)=>(


<tr key={player._id || index}>


<td>

#{index+1}

</td>


<td>

<div className="player-name">

{getMedal(index)}

&nbsp;

{player.name || "Anonymous"}

</div>

</td>



<td>

<strong>

{player.score || 0}

</strong>

</td>




<td>

{player.accuracy || "0"}%

</td>



</tr>



))

}


</tbody>


</table>


</div>


</div>



</>



}



</div>


);


}


export default Leaderboard;