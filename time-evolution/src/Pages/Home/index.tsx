import React, { useState, useRef } from 'react';
import './style.css';

import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';


function Home() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(0);

  function handleStart() {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

  }
  function handlePause() {
    clearInterval(countRef.current)
    setIsPaused(false)
  }

  function handleReset() {
    clearInterval(countRef.current)
    setIsPaused(false);
    setIsActive(false);
    setTimer(0)
  }

  function pad0(value: number, count: number) {
    var result = value.toString();
    for (; result.length < count; --count) {
      result = '0' + result;
    }
    return result;
  }

  function formatTime(time: number) {
    const seconds = time % 60;
    const minutes = Math.trunc(time / 60) % 60;
    const hores = Math.trunc(time / 3600);

    if (!!hores) {
      return `${pad0(hores, 2)}:${pad0(minutes, 2)}:${pad0(seconds, 2)}`
    }
    return `${pad0(minutes, 2)}:${pad0(seconds, 2)}`
  }

  return (
    <>
      <Header />

      <section className="stopwatch-table">
        <div className="stopwatch-back">
          <p className="stopwatch">{formatTime(timer)}</p>
        </div>
        <nav className="stopwatch-controls">
          <ul>
            <li><a href="#" className="stopwatch-main-function" onClick={handleStart}>Start</a></li>
            <li><a href="#" className="stopwatch-main-function" onClick={handlePause}>Finish</a></li>
            <li><a href="#" className="stopwatch-main-function" onClick={handleReset}>Clean</a></li>
          </ul>
        </nav>
        <div className="stopwatch-historic">
          <ol className="results"></ol>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
