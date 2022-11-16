import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { score, scoreBad } from "../store_equals/characters/slice";
import useSound from "use-sound";
import badSound from "../audio/fart.mp3";
import winSound from "../audio/correct-choice.mp3";

export default function MoveCharacter(props) {
  const [showbug, setShowbug] = useState(true);

  const dispatch = useDispatch();
  const [playBad] = useSound(badSound);
  const [playWin] = useSound(winSound);

  console.log(props.imageToCompare);

  return (
    <div className="mx-3 my-1">
      {props.characterName === props.imageToCompare ? (
        <button
          onClick={() => {
            setShowbug(!showbug);
            dispatch(score(1));
            playWin();
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
            playBad();
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
