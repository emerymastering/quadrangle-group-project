import React, { useContext } from "react";
import { WordleContext } from "../App";
import Grid from "./Grid/Grid";
import Keyboard from "./Keyboard/Keyboard";

const Board = () => {
  const { word } = useContext(WordleContext);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-5xl m-4">WORDLE</h1>
      <Grid />
      <Keyboard />
      <small className="m-5">
        #Refresh Page to play again with different word.
      </small>
      <small className="rotate-180 text-[4px]"> {word} </small>
    </div>
  );
};

export default Board;
