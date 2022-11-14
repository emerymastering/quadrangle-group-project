import React from "react";
import Grid from "./Grid/Grid";
import KeyBoard from "./Keyboard/KeyBoard";

export default function Board() {
  return (
    <div>
      <h1 className="font-extrabold text-5xl m-4 ">WORDLE</h1>
      <Grid />
      <KeyBoard />
      <small className="m-5">
        #Refresh Page to play again with different word.
      </small>
    </div>
  );
}
