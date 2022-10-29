import styled from "styled-components";

export const PlayerWrapper = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TimeControler = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  p {
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Track = styled.div`
  background-color: lightblue;
  width: 100%;
  height: 1rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  input {
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
    }

    &::-moz-range-thumb {
      -moz-appearance: none;
      height: 16px;
      width: 16px;
    }
  }

  div {
    background: rgb(204, 204, 204);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(30%);
    pointer-events: none;
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
