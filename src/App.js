import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";
import { Edip } from "./pages";
import { Elys } from "./pages";
import { Denis } from "./pages";
import { Chathu } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Edip" element={<Edip />} />
        <Route path="/" element={<Elys />} />
        <Route path="/" element={<Denis />} />
        <Route path="/" element={<Chathu />} />
      </Routes>
    </div>
  );
}

export default App;
