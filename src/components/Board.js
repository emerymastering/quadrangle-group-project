import React, { useContext } from "react";
import { WordleContext } from "../pages/Chathu";
import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard/KeyBoard";

const Board = () => {
  const ctx = useContext(WordleContext);
  console.log(ctx);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-5xl m-4">WORDLE</h1>
      <Grid />
      <Keyboard />
      <small className="m-5">
        #Refresh Page to play again with different word.
      </small>
      <small className="rotate-180 text-[4px]"> {ctx.word} </small>
    </div>
  );
};

export default Board;
