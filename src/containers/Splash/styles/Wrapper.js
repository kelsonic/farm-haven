import styled from 'styled-components';

export default styled.div`
  align-items: center;
  display: ${({ hide }) => hide ? 'none' : 'flex'};
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;
