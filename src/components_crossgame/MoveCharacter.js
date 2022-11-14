import React, { useState } from "react";

export default function MoveCharacter(props) {
  const [showadult1, setShowadult1] = useState(true);
  //   let numX = Math.floor(Math.random() * 781);
  //   let numY = Math.floor(Math.random() * 456);

  const [countGood, setCountGood] = useState(0);
  const [countBad, setCountBad] = useState(0);
  console.log("CountBAD", countBad);
  console.log("CountGOOD", countGood);

  return (
    <div>
      {props.character === props.imageToCompare ? (
        <button
          onClick={() => {
            setShowadult1(!showadult1);
            setCountGood(countGood + 1);
          }}
        >
          <div className={showadult1 ? "show-element" : null}>
            {showadult1 && (
              <img src={props.character} alt="" className="w-16" />
            )}
          </div>
        </button>
      ) : (
        <button
          onClick={() => {
            setCountBad(countBad - 1);
          }}
        >
          <div className={showadult1 ? "show-element" : null}>
            {showadult1 && (
              <img src={props.character} alt="" className="w-16" />
            )}
          </div>
        </button>
      )}
    </div>
  );
}
