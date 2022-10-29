import styled from "styled-components";

export const SongLibrary = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: background 0.5s ease;

  img {
    width: 30%;
  }

  &:hover {
    background: rgb(222, 222, 222);
  }

  &:active {
    background: violet;
  }
`;

export const SongDescription = styled.div`
  padding-left: 1rem;
  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.8rem;
  }
`;
