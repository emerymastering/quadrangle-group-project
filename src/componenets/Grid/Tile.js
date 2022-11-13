import React, { useState } from "react";

export default function Tile() {
  const [letter, setLetter] = useState("");
  const [completed, setCompleted] = useState(true);
  const [colors, serColors] = useState({ back: "white", font: "black" });

  const style = {
    backgroundColor: colors.back,
    color: colors.font,
  };
  return (
    <div
      style={{ style }}
      className="flex justify-center my-[2px] m-[2px] items-center  w-[62px] h-[62px] border-2"
    >
      <p className="flex self-center mb-2 font-bold text-5xl"> {letter} </p>
    </div>
  );
}
