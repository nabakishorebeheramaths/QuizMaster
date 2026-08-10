
import React, { useEffect, useRef } from "react";

function Timer({
  timeLeft,
  setTimeLeft,
  onTimeUp,
}) {
  const timeUpCalled = useRef(false);

  useEffect(() => {
    // Reset guard whenever a new timer starts
    if (timeLeft > 0) {
      timeUpCalled.current = false;
    }

    // Time finished
    if (timeLeft <= 0) {
      if (!timeUpCalled.current) {
        timeUpCalled.current = true;
        onTimeUp();
      }

      return;
    }

    // Countdown
    const timer = setTimeout(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft, setTimeLeft, onTimeUp]);

  return (
    <div className="timer" aria-live="polite">
      ⏰ {timeLeft}s
    </div>
  );
}

export default Timer;
