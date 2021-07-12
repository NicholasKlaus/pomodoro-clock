import React from 'react';
import { useSelector } from 'react-redux';

export const Timer = () => {
  const { isSession, timerMinute, timerSecond } = useSelector(({timer}) => timer)

  return(
    <div>
      <div className="timer-container">
        <h4> {isSession === true ? "Session" : "Breack"} </h4>
        <span className="timer"> {timerMinute} </span>
        <span className="timer">:</span>
        <span className="timer"> 
          {
            timerSecond === 0
            ? "00" 
            : timerSecond < 10
            ? "0" + timerSecond 
            : timerSecond
          }
        </span>
      </div>
      <div className="timer-actions">
        <button className="btn">Play</button>
        <button className="btn">Stop</button>
        <button className="btn">Refresh</button>
      </div>
    </div>
  );
}