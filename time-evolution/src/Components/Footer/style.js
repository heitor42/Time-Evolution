import styled from 'styled-components';

export const FooterBase = styled.footer`
  width: 100VW;
  background: var(--footer-background-color);
  height: 67px;

  & div {
    display: flex;
  }

  p {
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    position: relative;

    color: var(--main-font-color)
  }

  a {
    color: var(--main-font-color);
    text-decoration: none;
  }

  & h1 {
    margin-top: 8px;
    margin-bottom: 8px;

    margin-left: 32px;

    font-family: Playfair Display;
    font-size: 32px;
    color: var(--main-font-color);
  }

  & img{
    position: absolute;
    top: -5px;
    right: 98.5px;
  }
`;
