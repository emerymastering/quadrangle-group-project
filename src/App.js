import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Homepage } from "./pages";
import { Edip } from "./pages";
import { Elys } from "./pages";
import { Denis } from "./pages";
import { Chathu } from "./pages";
import { useState } from "react";

function App() {
  const [points, setPoints] = useState(0);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Edip" element={<Edip />} />
        <Route path="/Elys" element={<Elys />} />
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
