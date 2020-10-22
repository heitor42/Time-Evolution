import React from 'react';
import { FooterBase } from './style';
import pixilHeart from '../../assets/pixil-heart.png'

export default function Footer() {
  return (
    <FooterBase>
      <div>
        <h1>Tevo</h1>
        <p>
          Made with&nbsp;&nbsp;
          <img src={pixilHeart} alt="heat" />
          by <a href="https://twitter.com/heito42">@heito42</a>
        </p>
      </div>
    </FooterBase>
  )
}
