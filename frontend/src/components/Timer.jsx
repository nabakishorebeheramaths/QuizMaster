
import React, { useEffect, useRef } from "react";

function Timer({
  timeLeft,
  setTimeLeft,
  onTimeUp,
}) {
  const timeUpCalled = useRef(false);

  useEffect(() => {
    // Reset the guard whenever a new timer starts
    if (timeLeft > 0) {
      timeUpCalled.current = false;
    }

    // =====================================================
    // TIME FINISHED
    // =====================================================

    if (timeLeft <= 0) {
      if (!timeUpCalled.current) {
        timeUpCalled.current = true;
        onTimeUp();
      }

      return;
    }

    // =====================================================
    // COUNTDOWN
    // =====================================================

    const timer = setTimeout(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft, setTimeLeft, onTimeUp]);

  return (
    <div className="timer">
      ⏰ {timeLeft}s
    </div>
  );
}

export default Timer;
