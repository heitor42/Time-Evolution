import React from 'react';
import stopwatch from './script/stopwatch';
import './style.css';

import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';


function Home() {
  const {
    timer,
    timers,
    isActive,
    CleanHistoric,
    handleFinish,
    handleStart
  } = stopwatch()

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
            <li><a href="#" className="stopwatch-main-function" onClick={() => {
              if (!isActive) return handleStart()
            }}>Start</a></li>
            <li><a href="#" className="stopwatch-main-function" onClick={handleFinish}>Finish</a></li>
            <li><a href="#" className="stopwatch-main-function" onClick={CleanHistoric}>Clean</a></li>
          </ul>
        </nav>
        <div className="stopwatch-historic">
          <ol className="results">{
            timers.map((time, index) => {
              return (
                <li key={index}>Questão {index + 1} {formatTime(time)}</li>
              )
            })
          }</ol>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
