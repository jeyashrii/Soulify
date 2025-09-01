import React, { useState } from "react";
import "./MoodSelection.css";
import { useNavigate } from "react-router-dom";
import sad from "../assets/images/sad.jpg";
import angry from "../assets/images/angry.jpg";
import love from "../assets/images/love.jpg";
import happy from "../assets/images/happy.jpg";
import useSound from "use-sound";
import buttonSound from "../assets/sounds/mouse-click.mp3";
import axios from "axios";
const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const MoodSelection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [playSound] = useSound(buttonSound);
  const moods = [
    { name: "love", img: love },
    { name: "sad", img: sad },
    { name: "happy", img: happy },
    { name: "angry", img: angry },
  ];

  const FetchPlaylist = async (mood) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${mood}&api_key=${API_KEY}&format=json`
      );
      const tracks = response.data.tracks.track.map((track) => ({
        name: track.name,
        artist: track.artist.name,
        image:
          track.image && track.image[1] && track.image[1]["#text"]
            ? track.image[1]["#text"]
            : "/placeholder.png",
        track_url: track.url,
      }));
      console.log("Fetched Tracks:", tracks); // Debugging
      setPlaylist(tracks);
      navigate("/playlistdisplay", {
        state: { playlist: tracks, loading: false, mood },
      });
    } catch (error) {
      console.error("error fetching playlist:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <p>how's your soul feeling today?</p>
      <div className="mood-selector-div">
        {moods.map((mood, index) => (
          <img
            key={index}
            src={mood.img}
            alt={mood.name}
            onClick={() => {
              playSound();
              FetchPlaylist(mood.name);
            }}
            className="mood-card"
          ></img>
        ))}
      </div>
    </div>
  );
};

export default MoodSelection;
