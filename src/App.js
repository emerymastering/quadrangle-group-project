import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";
import CrossGame from "./pages/CrossGame";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/crossgame" element={<CrossGame />} />
      </Routes>
    </div>
  );
}

export default App;
