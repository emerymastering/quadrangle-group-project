import { useState, useEffect } from "react";
import { imagesFood } from "./images";

export const Denis = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [points, setPoints] = useState(0);
  const [time, setTime] = useState(3);
  const [gameFinished, setGameFinished] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowComponent(!showComponent);
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [showComponent]);

  const shownFood = imagesFood[Math.floor(Math.random() * imagesFood.length)];
  const onClick = () => {
    setPoints(points + (shownFood.type === "v" ? 5 : -5));
    setShowComponent(!showComponent);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time - 1);
      if (time === 1) {
        setGameFinished(true);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  return (
    <div className="flex items-center justify-center h-screen bg-[url('./images/vs.jpeg')] bg-center bg-cover">
      {gameFinished ? (
        <div>Game Over, your score is: {points}</div>
      ) : (
        <div>
          <div>Score:{points}</div>
          {"_"}
          <div>Time:{time}</div>
          {
            <div>
              <img
                src={shownFood.image}
                className="max-w-xs h-auto rounded-full"
                alt=""
                onClick={() => onClick()}
              ></img>
            </div>
          }
        </div>
      )}
    </div>
  );
};
