import React from "react";
import "./playlistdisplay.css";
import { Link, useLocation } from "react-router-dom";
import useSound from "use-sound";
import buttonSound from "../assets/sounds/mouse-click.mp3";
import playButton from "../assets/images/play.png";
const Playlistdisplay = () => {
  const [playSound] = useSound(buttonSound);
  const location = useLocation();
  const { playlist, loading, mood } = location.state || {
    playlist: [],
    loading: true,
    mood: "",
  };
  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="container">
      <div className="playlist-box">
        <h1 className="playlist-head">
          your <span>{mood}</span> playlist
        </h1>
        <div className="grid-container">
          {playlist &&
            playlist.map((track, index) => (
              <div className="track-div" key={index}>
                <div className="left">
                  <p>{track.name}</p>
                  <p>{track.artist}</p>
                </div>
                <div className="right">
                  <div className="button-div">
                    <Link to={track.track_url} onClick={playSound}>
                      <img className="btn-img" src={playButton}></img>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Playlistdisplay;
