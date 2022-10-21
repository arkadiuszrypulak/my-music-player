import React from "react";
//styles
import { Wrapper } from "./styles/App.styles";
//components
import Player from "./components/Player";
import Song from "./components/Song";
//data
import data from "./data";

function App() {
  return (
    <Wrapper>
      <Song />
      <Player />
    </Wrapper>
  );
}

export default App;
