import React from 'react';

import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import Game from './Components/Game';

import './style.css';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="text">
          4
          <div className="game">
            <Game />
          </div>
          4
        </div>
      </div>
      <Footer />
    </>
  )
}
