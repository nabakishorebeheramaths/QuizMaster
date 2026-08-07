import React, { useEffect } from "react";

function Timer({ timeLeft, setTimeLeft, onTimeUp }) {

  useEffect(() => {

    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);

  }, [timeLeft, setTimeLeft, onTimeUp]);

  return (
    <div className="timer">
      ⏰ {timeLeft}s
    </div>
  );
}

export default Timer;