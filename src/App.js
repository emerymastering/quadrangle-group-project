import { Routes, Route } from "react-router-dom";
import React from "react";

import "./App.css";
import Board from "./components/Board.js";
import { createContext, useState } from "react";
import { dictionary } from "./components/variables";
//import _ from "lodash";

export const WordleContext = createContext();

import { Homepage } from "./pages";
import EqualGame from "./pages/EqualGame";
import { Edip } from "./pages";
import { Denis } from "./pages";
import { Chathu } from "./pages";
import { useState } from "react";

function App() {
  const [points, setPoints] = useState(0);

  const [word, setWord] = useState("GAMES");
  const [completedRows, setCompletedRows] = useState([]);
  const [guessWord, setGuessWord] = useState("");
  const [currentRow, setCurrentRow] = useState(0);

  const guessTheWord = (char) => {
    if (guessWord.length === 5) return; // LOUSY
    setGuessWord(guessWord.concat(char));
  };

  const pressEnter = () => {
    if (currentRow > 5)
      return alert(
        "You have unfortunately exhausted all your trials. Press refresh to try again. "
      );
    if (guessWord.length < 5) return;
    if (!dictionary.includes(guessWord.toLocaleLowerCase()))
      return alert("Word not found");
    if (guessWord === word) alert("Congratulations you got it");

    console.log("Pressed Enter" + currentRow);
    setCurrentRow(currentRow + 1);
    setCompletedRows([...completedRows, currentRow]);
    setGuessWord("");
  };

  const backspace = () => {
    setGuessWord(guessWord.slice(0, guessWord.length - 1));
  };

  return (
    <div>
      <WordleContext.Provider
        value={{
          guessTheWord,
          pressEnter,
          completedRows,
          currentRow,
          word,
          guessWord,
          backspace,
        }}
      >
        <Board />
      </WordleContext.Provider>
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
