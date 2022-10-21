import React from "react";
//styles
import { PlayerWrapper, TimeControler, PlayControler } from "../styles/Player.styles";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <PlayerWrapper>
      <TimeControler>
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </TimeControler>
      <PlayControler>
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
      </PlayControler>
    </PlayerWrapper>
  );
};

export default Player;
