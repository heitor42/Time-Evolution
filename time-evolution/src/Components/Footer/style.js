import styled from 'styled-components';

export const FooterBase = styled.footer`
  width: 100VW;
  background: var(--footer-background-color);

  & div {
    display: flex;
  }

  .social {
    margin: 16px 32px;
    margin-left: auto;
  }

  .social-icon {
    width: 31px;
    height: 25px;
    color: var(--main-font-color);
  }

  & h1 {
    margin: 8px 32px;
    font-family: Playfair Display;
    font-size: 32px;
    color: var(--main-font-color);
  }
`;
