import React, { useState } from "react";
import imageBoat from "../img_crossgame/boat.png";
import imageadult1 from "../img_crossgame/adult1.png";
import imageadult2 from "../img_crossgame/adult2.png";
import imagechild1 from "../img_crossgame/child1.png";
import imagechild2 from "../img_crossgame/child2.png";
import imagechild3 from "../img_crossgame/child3.png";

export default function CrossGame() {
  const [showadult1, setShowadult1] = useState(true);
  const [showadult2, setShowadult2] = useState(true);
  return (
    <div className="flex justify-between h-screen  bg-lime-500 ">
      <div className="w-96">
        <div className="flex">
          <button onClick={() => setShowadult1(!showadult1)}>
            <div className={showadult1 ? "show-element" : null}>
              {showadult1 && <img src={imageadult1} alt="" className="w-16" />}
            </div>
          </button>
          <button onClick={() => setShowadult2(!showadult2)}>
            <div className={showadult2 ? "show-element" : null}>
              {showadult2 && <img src={imageadult2} alt="" className="w-16" />}
            </div>
          </button>
        </div>
        <div className="flex">
          <img src={imagechild1} alt="" className="w-14" />
          <img src={imagechild2} alt="" className="w-16" />
          <img src={imagechild3} alt="" className="w-14" />
        </div>
      </div>
      <div className="w-96 bg-cyan-400">
        <div>
          <img src={imageBoat} alt="" className="w-40" />
        </div>
      </div>
      <div className="w-96">3</div>
    </div>
  );
}
