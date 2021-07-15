import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetTimer, startTimer, stopTimer, switchBreak, switchSession, decSeconds } from '../redux/actions'
import soundfile from '../audioFile/soundfile.mp3';

export const Timer = () => {
  const { timerRunning, secondsLeft, interval } = useSelector(({timer}) => timer)
  const dispatch = useDispatch();
  const audio = new Audio(soundfile);
  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft - minutes * 60;

  const Play = () => {
    dispatch(startTimer());
  }
  const Stop = () => {
    dispatch(stopTimer());
  }

  const Reset = () => {
    dispatch(resetTimer());
  }

  useEffect(() => {       
    let countdown = null;
    if (timerRunning && secondsLeft > 0) {
      countdown = setInterval(() => {
        dispatch(decSeconds());
      }, 1000);
    } else if (timerRunning && secondsLeft === 0) {
      countdown = setInterval(() => {
        dispatch(decSeconds());
      }, 1000);
      audio.play();
      if (interval === 'Session') {
        dispatch(switchBreak());
      } else if (interval === 'Break') {
        dispatch(switchSession());
      }
    } else {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [timerRunning, secondsLeft, interval, dispatch]);

  return(
    <div>
      <div className="timer-container">
        <h4> {interval} </h4>
        <div className="timer">
          {minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
        </div>
      </div>
      <div className="timer-actions">
        <button className="btn" onClick={Play}>Play</button>
        <button className="btn" onClick={Stop}>Stop</button>
        <button className="btn" onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}