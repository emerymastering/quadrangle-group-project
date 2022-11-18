import React, { useContext, useState, useEffect } from "react";
import { WordleContext } from "../pages/Chathu";

const Tile = ({ id, rowId }) => {
  const [letter, setLetter] = useState("");
  const [completed, setCompleted] = useState(true);
  const { guessWord, word, currentRow, completedRows } =
    useContext(WordleContext);
  const [colors, setColor] = useState({ back: "white", font: "black" });

  const style = {
    backgroundColor: colors.back,
    color: colors.font,
  };

  useEffect(() => {
    if (currentRow === rowId) {
      setLetter(guessWord[id]);
    }
    if (completedRows.includes(rowId) && completed) {
      changeColors();
      setCompleted(false);
    }
    // eslint-disable-next-line
  }, [guessWord, completedRows]);

  const changeColors = () => {
    const arrayWord = word.split("");
    if (arrayWord.includes(letter)) {
      if (arrayWord[id] === letter) {
        return setColor({ back: "lightgreen", font: "white" });
      }
      return setColor({ back: "gold", font: "white" });
    }
    return setColor({ back: "grey", font: "white" });
  };

  return (
    <div
      style={style}
      className="flex justify-center my-[2px] m-[2px] items-center  w-[62px] h-[62px] border-2"
    >
      <p className="flex self-center mb-2 font-bold text-5xl">{letter}</p>
    </div>
  );
};

export default Tile;
