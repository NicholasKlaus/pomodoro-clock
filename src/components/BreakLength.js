import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementBreak, incrementBreak } from '../redux/actions';

export const BreakLength = () => {
  const { breakLength } = useSelector(({timer}) => timer);
  const dispatch = useDispatch();

  const decreaseBreak = () => {
    if( breakLength === 1) {
      return null;
    }
    dispatch(decrementBreak());
  }

  const increaseBreak = () => {
    if( breakLength === 60) {
      return null;
    }
    dispatch(incrementBreak());
  }

  return (
    <div>
      <h4>Breack Length</h4>
      <div className="interval-container">
        <i className="icofont-caret-left arrow" onClick={decreaseBreak}></i>
        <p className="interval-length"> {breakLength} </p>
        <i className="icofont-caret-right arrow" onClick={increaseBreak}></i>
      </div>
    </div>
  );
}