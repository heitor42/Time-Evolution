import React from 'react';

import Header from '../../Components/Header/index.jsx';
import Footer from '../../Components/Footer/index.jsx';

import StopwatchMainFunction from '../../Components/Button/style';

function Home() {
  return (
    <>
      <Header />

      <section class="stopwatch-table">
        <div class="stopwatch-back">
          <p class="stopwatch"></p>
        </div>
        <nav class="stopwatch-controls">
          <ul>
            <li><StopwatchMainFunction href="#" onclick="stopwatch.start()">Start</StopwatchMainFunction></li>
            <li><a href="#" class="stopwatch-main-function" onclick="stopwatch.saveResult()">Finish</a></li>
            <li><a href="#" class="stopwatch-main-function" onclick="stopwatch.clear()">Clean</a></li>
          </ul>
        </nav>
        <div class="stopwatch-historic">
          <ol class="results"></ol>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;