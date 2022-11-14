import "./App.css";
import Board from "./components/Board";
import { dictionary } from "./components/Variables";
import { createContext, useState } from "react";

export const WordleContext = createContext();

function App() {
  const [word, setWord] = useState("GAMES");
  const [guessWord, setGuessWord] = useState("");
  const [completedRows, setCompletedRows] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);

  const guessTheWord = (char) => {
    if (guessWord.length === 5) return; // LOUSY
    setGuessWord(guessWord.concat(char));
  };

  const pressEnter = () => {
    if (guessWord.length < 5) return;
    if (!dictionary.includes(guessTheWord.toLowerCase()))
      return alert("The word not fount in the dictionary");
    if (guessTheWord === word)
      alert("Congratulations!! You have guessed the word correctly");

    setCurrentRow(currentRow + 1);
    setCompletedRows([...completedRows], currentRow);
    setGuessWord("");
  };

  const backSpace = () => {
    setGuessWord(guessWord.slice(0, guessWord.length - 1));
  };
  return (
    <div className="App">
      <div class=" min-h-screen flex items-center justify-center bg-indigo-900">
        <div class="relative">
          <div class="w-16 h-16 bg-white rounded-lg shadow-2xl"></div>
          <div class="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-300 animate-ping">
            <h1 className="text-3xl font-bold underline pt-40">
              Welcome to Quadrangle!
            </h1>
          </div>
          <div class="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-300">
            <h1 className="text-3xl font-bold underline pt-40">
              Welcome to Quadrangle!
            </h1>
          </div>
          <div>
            <WordleContext.Provider
              value={{
                guessTheWord,
                pressEnter,
                completedRows,
                currentRow,
                word,
                guessWord,
                backSpace,
              }}
            >
              <Board />
            </WordleContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
