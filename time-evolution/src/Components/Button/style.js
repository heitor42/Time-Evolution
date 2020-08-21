import styled from 'styled-components';

const StopwatchMainFunction = styled.a`
  width: 170px;
  border-radius: 50px;
  border: solid var(--border-color);
  font-size: 1.1em;
  text-align: center;

  transition: background 0.3s;

  &:hover {
    background: var(--border-color);
  }
`;

export default StopwatchMainFunction;
