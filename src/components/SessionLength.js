import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementSession, incrementSession } from '../redux/actions';

export const SessionLength = () => {
  const { SessionLength } = useSelector(({timer}) => timer)
  const dispatch = useDispatch();

  const decreaseSession = () => {
    if( SessionLength === 1) {
      return;
    }
    dispatch(decrementSession());
  }

  const increaseSession = () => {
    if( SessionLength === 60) {
      return;
    }
    dispatch(incrementSession());
  }

  return (
    <div>
      <h4>Session Length</h4>
      <div className="interval-container">
        <i className="icofont-caret-left arrow" onClick={decreaseSession}></i>
        <p className="interval-length"> {SessionLength} </p>
        <i className="icofont-caret-right arrow" onClick={increaseSession}></i>
      </div>
    </div>
  );
}