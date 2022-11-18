import { Routes, Route } from "react-router-dom";
import React from "react";

import "./App.css";

import { Homepage, Edip, Denis, Chathu } from "./pages";
import EqualGame from "./pages/EqualGame";

import { useState } from "react";

function App() {
  const [points, setPoints] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/equalgame" element={<EqualGame />} />
        <Route path="/Edip" element={<Edip />} />
        <Route
          path="/Denis"
          element={<Denis points={points} setPoints={setPoints} />}
        />
        <Route path="/Chathu" element={<Chathu />} />
      </Routes>
    </div>
  );
}

export default App;
