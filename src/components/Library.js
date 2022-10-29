import React from "react";
import LibrarySong from "./LibrarySong";
//styles
import { LibraryWrapper } from "../styles/Library.styles.js";

const Library = ({
  audioRef,
  libraryStatus,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
}) => {
  return (
    <LibraryWrapper libraryStatus={libraryStatus}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            id={song.id}
            key={song.id}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </LibraryWrapper>
  );
};

export default Library;
