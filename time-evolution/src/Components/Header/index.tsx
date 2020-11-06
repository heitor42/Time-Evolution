import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  margin: 16px 32px;
  font-family: Playfair Display;
  font-size: 32px;
`;

function MainHeader() {
  return (
    <>
      <Header>
        <h1>TEVO</h1>
      </Header>
    </>
  )
}

export default MainHeader;
