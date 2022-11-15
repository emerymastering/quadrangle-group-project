import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";
import EqualGame from "./pages/EqualGame";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/equalgame" element={<EqualGame />} />
      </Routes>
    </div>
  );
}

export default App;
