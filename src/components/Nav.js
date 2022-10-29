import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Navigation } from "../styles/Nav.styles";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <Navigation>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </Navigation>
  );
};

export default Nav;
