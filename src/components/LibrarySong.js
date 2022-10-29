import React from "react";
//styles
import { SongDescription, SongLibrary } from "../styles/LibrarySong.styles";

const LibrarySong = ({
  audioRef,
  song,
  songs,
  isPlaying,
  setCurrentSong,
  id,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <SongLibrary
      onClick={songSelectHandler}
      className={`${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <SongDescription>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </SongDescription>
    </SongLibrary>
  );
};

export default LibrarySong;
