import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import MoodSelection from "./Components/MoodSelection";
import Playlistdisplay from "./Components/Playlistdisplay";

function App() {
  return (
    <>
      <div className="app-div-container">
        <Header></Header>
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/moodSelection"
              element={<MoodSelection></MoodSelection>}
            ></Route>
            <Route
              path="/playlistdisplay"
              element={<Playlistdisplay></Playlistdisplay>}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
