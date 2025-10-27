import React, { useState } from "react";
import "./Header.css";
import volumeIcon from "../assets/icons/volume-on.png";
import volumeOffIcon from "../assets/icons/volume-off.png";
const Header = () => {
  const [isMuted, setIsMuted] = useState(false); // State to track volume status

  const volumeChange = () => {
    const audio = document.querySelector("audio");
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsMuted(false);
      } else {
        audio.pause();
        setIsMuted(true);
      }
    }
  };
  return (
    <div className="header">
      <p>Soulify</p>
      <img
        onClick={volumeChange}
        src={isMuted ? volumeOffIcon : volumeIcon}
      ></img>
    </div>
  );
};

export default Header;
