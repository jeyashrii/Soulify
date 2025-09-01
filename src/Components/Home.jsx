import React from "react";
import "./Home.css";
import useSound from "use-sound";
import buttonSound from "../assets/sounds/mouse-click.mp3";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [playSound] = useSound(buttonSound);
  return (
    <div className="home-container">
      <div className="start">
        <button
          onClick={() => {
            playSound();
            navigate("/moodSelection");
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Home;
