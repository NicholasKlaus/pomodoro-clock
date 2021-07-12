import React from 'react';
import { BreakLength, SessionLength, Timer } from './components/index';

function App() {
  return (
    <div className="App">
      <div className="main-wrap">
        <h2>Pomodoro Clock</h2>
        <div className="interval-wrap">
          <BreakLength />
          <SessionLength />
        </div>
        <Timer />
      </div>
    </div>
  );
}

export default App;