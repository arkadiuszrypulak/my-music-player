import styled from "styled-components";

export const LibraryWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  overflow: scroll;
  transform: translateX(${(props) => (props.libraryStatus ? "0" : "-100%")});
  transition: all 0.5s ease;
  opacity: ${props => (props.libraryStatus ? '1' : '0')};
  z-index: 100;
  background-color: #fff;

  h2 {
    padding: 2rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
