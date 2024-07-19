import React, { useContext,useState, useRef } from 'react';
import stopwatch from './assets/stopwatchicon.png';
import './App.css';
import { Stopwatch } from './components/stopwatch';

function App() {
  const {DisplayTimer,Start,Stop,Reset} = useContext(Stopwatch)
  return (
    <React.Fragment>
      <h2>Stopwatch</h2>
      <div className="main-div">
        <p className="timer-image">
          <img src={stopwatch} alt="img" height={20} width={18} /> Timer
        </p>
        <DisplayTimer />
        <button className="start-button" onClick={Start}>Start</button>
        <button className="stop-button" onClick={Stop}>Stop</button>
        <button className="reset-button" onClick={Reset}>Reset</button>
      </div>
    </React.Fragment>
  );
}

export default App;