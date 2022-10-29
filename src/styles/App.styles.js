import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;

  transition: all 0.5s ease;
  margin-left: ${(props) => (props.libraryStatus ? "30%" : "")};

  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }

  h1,
  h2 {
    color: rgba(54, 54, 54);
  }

  h3,
  h4 {
    font-weight: 400;
    color: rgb(100, 100, 100);
  }
`;
