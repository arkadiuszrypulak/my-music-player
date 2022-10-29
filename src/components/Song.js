import React from "react";
//styles
import { SongWrapper } from "../styles/Song.styles";

const Song = ({ currentSong }) => {
  return (
    <SongWrapper>
      <img src={currentSong.cover} alt={currentSong.name}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </SongWrapper>
  );
};

export default Song;
