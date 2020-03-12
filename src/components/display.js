import React from "react";

export default function Display(props) {
  const { timerType, convertToClockTime, timeLeft } = props;
  return (
    <div className="display">
      <h2 className="timer-label" id="timer-label">
        {timerType}
      </h2>
      <h3 className="time-left" id="time-left">
        {convertToClockTime(timeLeft)}
      </h3>
    </div>
  );
}
