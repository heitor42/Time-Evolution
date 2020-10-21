import React, { useState, useEffect } from 'react';
import './style.css';

import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';

function Home() {
  const [state, setState] = useState({
    running: false,
    time: null,
    times: [0, 0, 0],
  })

  return (
    <>
      <Header />

      <section className="stopwatch-table">
        <div className="stopwatch-back">
          <p className="stopwatch"></p>
        </div>
        <nav className="stopwatch-controls">
          <ul>
            <li><a href="#" className="stopwatch-main-function" onClick={() => { }}>Start</a></li>
            <li><a href="#" className="stopwatch-main-function" onClick={() => { }}>Finish</a></li>
            <li><a href="#" className="stopwatch-main-function" onClick={() => { }}>Clean</a></li>
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
