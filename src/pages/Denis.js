import { useState, useEffect } from "react";
import { imagesFood } from "./images";

export const Denis = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowComponent(!showComponent);
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [showComponent]);

  return (
    <div className="flex items-center justify-center h-screen">
      {showComponent && (
        <div>
          <img
            src={imagesFood[Math.floor(Math.random() * imagesFood.length)]}
            className="max-w-xs h-auto rounded-full"
            alt=""
            onClick={() => console.log("yo")}
          ></img>
        </div>
      )}
    </div>
  );
};
