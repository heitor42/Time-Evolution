import React from 'react';

import grid from '../../assets/tic-tac-toe.svg'

import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';

export default function NotFound() {
  return (
    <>
      <Header />
      <img src={grid} alt="grid" />
      <Footer />
    </>
  )
}
