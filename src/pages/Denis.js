import { useState, useEffect } from "react";
import { imagesFood } from "./images";

export const Denis = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [points, setPoints] = useState(0);
  const [time, setTime] = useState(3);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameStart, setGameStart] = useState(false);

  const onStartClick = () => {
    setGameStart(true);
    setGameFinished(false);
  };
  const shownFood = imagesFood[Math.floor(Math.random() * imagesFood.length)];
  const onClick = () => {
    setPoints(points + (shownFood.type === "v" ? 5 : -5));
    setShowComponent(!showComponent);
    setGameStart(true);
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowComponent(!showComponent);
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [showComponent]);

  return (
    <div className="flex mx-auto justify-center h-screen bg-[url('./images/vs.jpeg')] bg-center bg-cover">
      {!gameStart ? (
        <button
          onClick={() => onStartClick()}
          className="bg-black text-5xl text-red-300 px-10 py-10 my-auto rounded-full"
        >
          Start Eating Healthy
        </button>
      ) : (
        <div className="my-auto">
          {gameFinished && gameStart ? (
            <div className="flex flex-col">
              <div className="bg-black animate-pulse text-5xl text-red-300 px-10 py-10 rounded-full">
                Game Over, you scored {points} health points
              </div>
              <button
                onClick={() => window.location.reload(false)}
                className="bg-black text-5xl text-red-300 py-10 mx-40 mt-4 rounded-full"
              >
                Start Again
              </button>
            </div>
          ) : (
            <div className="flex flex-col mt-0">
              <div className="px-10 bg-black text-5xl text-red-300 py-10 mx-40 mt-4 rounded-full">
                Health points: {points}
              </div>

              <div className="px-10 bg-black text-5xl text-red-300 py-10 mx-40 mt-4 mb-20 rounded-full text-center">
                Time: {time} sec
              </div>
              {
                <div className="max-h-10 mx-auto">
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
      )}
    </div>
  );
};
