import React from 'react';
import { FooterBase } from './style';
import twitterSVG from "../../assets/twitter.svg";
import githubSVG from "../../assets/github-image.svg";

export default function Footer() {
  return (
    <FooterBase>
      <div>
        <h1>Tevo</h1>
        <ol class="social">
          <a href="https://twitter.com/heito42"><img src={twitterSVG} alt="Twitter" class="social-icon" /></a>
          <a href="https://github.com/heitor42"><img src={githubSVG} alt="GitHub" class="social-icon" /></a>
        </ol>
      </div>
    </FooterBase>
  )
}
