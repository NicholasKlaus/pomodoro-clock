import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementSession, incrementSession } from '../redux/actions';

export const SessionLength = () => {
  const { sessionLength } = useSelector(({timer}) => timer)
  const dispatch = useDispatch();

  const decreaseSession = () => {
    if( sessionLength === 1) {
      return null;
    }
    dispatch(decrementSession());
  }

  const increaseSession = () => {
    if( sessionLength === 60) {
      return null;
    }
    dispatch(incrementSession());
  }

  return (
    <div>
      <h4>Session Length</h4>
      <div className="interval-container">
        <i className="icofont-caret-left arrow" onClick={decreaseSession}></i>
        <p className="interval-length"> {sessionLength} </p>
        <i className="icofont-caret-right arrow" onClick={increaseSession}></i>
      </div>
    </div>
  );
}