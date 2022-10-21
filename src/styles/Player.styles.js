import styled from "styled-components";

export const PlayerWrapper = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TimeControler = styled.div`
  width: 50%;
  display: flex;

  input {
    width: 100%;
    padding: 1rem 2rem;
  }

  p {
    padding: 1rem;
  }
`;

export const PlayControler = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;
