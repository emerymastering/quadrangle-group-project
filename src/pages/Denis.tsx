import "./Denis.css";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { imagesFood } from "./images";
const bad = require("../audio/fart.mp3");
const yummy = require("../audio/yummy.mp3");
const click = require("../audio/rclick.mp3");
const go = require("../audio/go.mp3");
const tic = require("../audio/tic.mp3");
interface DenisProps {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
}

export const Denis: React.FC<DenisProps> = ({ points, setPoints }) => {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [showComponent, setShowComponent] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [gameStart, setGameStart] = useState<boolean>(false);

  const playAudio = () => {
    new Audio(shownFood.type === "m" ? bad : yummy).play();
  };

  const playClick = () => {
    new Audio(click).play();
  };

  const playGo = () => {
    new Audio(go).play();
  };

  const onStartClick = () => {
    playClick();
    setTime(30 + points);
    setPoints(0);
    setGameStart(true);
    setGameFinished(false);
    playGo();
  };
  const shownFood = imagesFood[Math.floor(Math.random() * imagesFood.length)];
  const onClick = () => {
    setPoints(points + (shownFood.type === "v" ? 5 : -5));
    setShowComponent(!showComponent);
    setGameStart(true);
    playAudio();
  };

  useEffect(() => {
    const clockTic = new Audio(tic);
    if (gameStart) {
      const intervalId = setInterval(() => {
        setTime(time - 1);

        clockTic.play();
        if (time === 1) {
          setGameFinished(true);
          setGameStart(false);
          clockTic.pause();
        }
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [gameStart, time]);

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
      {!gameStart && !gameFinished ? (
        <button
          onClick={() => onStartClick()}
          className="bg-black text-5xl text-red-300 px-10 py-10 my-auto rounded-full"
        >
          Start Eating Healthy
        </button>
      ) : (
        <div className="">
          {gameFinished && !gameStart ? (
            <div className="flex flex-row my-80">
              <button
                onClick={() => onStartClick()}
                className="bg-black text-5xl text-red-300 px-10 py-10 rounded-full my-auto"
              >
                Start Again
              </button>
              <div className="bg-black text-center animate-pulse text-5xl text-red-300 px-10 py-10 rounded-full my-auto">
                {points <= 0 ? (
                  <div>
                    You scored {points}, next time choose a better food:)
                  </div>
                ) : (
                  <div>Congrats! You scored {points} health points</div>
                )}
              </div>
              <Link
                to={"/"}
                onClick={() => playClick()}
                className="bg-black text-5xl text-center text-red-300 px-10 py-10 rounded-full my-auto"
              >
                Back to Homepage
              </Link>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="px-10 bg-black text-5xl text-red-300 py-10 mx-40 mt-4 rounded-full">
                Health points: {points}
              </div>

              <div className="px-10 bg-black text-5xl text-red-300 py-10 mx-40 mt-4 mb-20 rounded-full text-center">
                Time: {time} sec
              </div>
              {
                <div className={`max-h-10 mx-auto`}>
                  <img
                    src={shownFood.image}
                    className={`max-w-xs h-auto rounded-full ${
                      shownFood.type === "v" ? "veg-image" : "meat-image"
                    }`}
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
