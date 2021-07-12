import React from 'react';
import { useSelector } from 'react-redux';

export const SessionLength = () => {
  const { SessionLength } = useSelector(({timer}) => timer)
  return (
    <div>
      <h4>Session Length</h4>
      <div className="interval-container">
        <i className="icofont-caret-left arrow"></i>
        <p className="interval-length"> {SessionLength} </p>
        <i className="icofont-caret-right arrow"></i>
      </div>
    </div>
  );
}