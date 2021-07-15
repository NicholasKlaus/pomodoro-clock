import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementBreak, incrementBreak } from '../redux/actions';

export const BreakLength = () => {
  const { BreakLength } = useSelector(({timer}) => timer);
  const dispatch = useDispatch();

  const decreaseBreak = () => {
    if( BreakLength === 1) {
      return;
    }
    dispatch(decrementBreak());
  }

  const increaseBreak = () => {
    if( BreakLength === 60) {
      return;
    }
    dispatch(incrementBreak());
  }

  return (
    <div>
      <h4>Breack Length</h4>
      <div className="interval-container">
        <i className="icofont-caret-left arrow" onClick={decreaseBreak}></i>
        <p className="interval-length"> {BreakLength} </p>
        <i className="icofont-caret-right arrow" onClick={increaseBreak}></i>
      </div>
    </div>
  );
}