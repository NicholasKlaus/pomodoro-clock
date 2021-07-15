import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTimer, endBreak, endSession } from '../redux/actions'

export const Timer = () => {
  const { isSession, timerMinute, timerSecond, BreakLength, intervalId } = useSelector(({timer}) => timer)
  const dispatch = useDispatch();

  const playTimer = () => {
    // intervalId = setInterval(decreaseTimer, 1000);
  }

  const stopTimer = () => {

  }

  const refreshTimer = () => {

  }

  return(
    <div>
      <div className="timer-container">
        <h4> {isSession === true ? "Session" : "Break"} </h4>
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
        <button className="btn" onClick={playTimer}>Play</button>
        <button className="btn" onClick={stopTimer}>Stop</button>
        <button className="btn" onClick={refreshTimer}>Refresh</button>
      </div>
    </div>
  );
}