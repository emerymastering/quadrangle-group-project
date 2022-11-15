import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { score, scoreBad } from "../store_equals/characters/slice";

export default function MoveCharacter(props) {
  const [showbug, setShowbug] = useState(true);

  const dispatch = useDispatch();
  //   let numX = Math.floor(Math.random() * 781);
  //   let numY = Math.floor(Math.random() * 456);

  console.log(props.imageToCompare);

  return (
    <div>
      {props.characterName === props.imageToCompare ? (
        <button
          onClick={() => {
            setShowbug(!showbug);
            dispatch(score(1));
          }}
        >
          <div className={showbug ? "show-element" : null}>
            {showbug && (
              <img src={props.characterImage} alt="" className="w-24" />
            )}
          </div>
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(scoreBad(1));
          }}
        >
          <div className={showbug ? "show-element" : null}>
            {showbug && (
              <img src={props.characterImage} alt="" className="w-24" />
            )}
          </div>
        </button>
      )}
    </div>
  );
}
