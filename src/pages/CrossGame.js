import imagebug5 from "../img_crossgame/bug5.png";
import imagebug19 from "../img_crossgame/bug19.png";
import imagebug39 from "../img_crossgame/bug39.png";
import imagebug13 from "../img_crossgame/bug13.png";
import imagebug20 from "../img_crossgame/bug20.png";
import imagebug38 from "../img_crossgame/bug38.png";
import imagebug15 from "../img_crossgame/bug15.png";
import imagebug22 from "../img_crossgame/bug22.png";
import imagebug31 from "../img_crossgame/bug31.png";
import MoveCharacter from "../components_crossgame/MoveCharacter";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCharacters } from "../store_equals/characters/selectors";

export default function CrossGame() {
  const characters = useSelector(selectCharacters);
  const image = [
    imagebug5,
    imagebug19,
    imagebug39,
    imagebug13,
    imagebug20,
    imagebug38,
    imagebug15,
    imagebug22,
    imagebug31,
  ];

  let [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const imageToCompare = image[count % image.length];

  return (
    <div className="flex flex-wrap h-screen bg-landscape max-h-fit bg-no-repeat ">
      {characters.map((c) => (
        <div key={c.id}>
          <MoveCharacter
            characterImage={c.image}
            characterName={c.name}
            imageToCompare={imageToCompare}
          />
        </div>
      ))}

      <div>
        <img src={imageToCompare} alt="" />
      </div>
      <div>
        <h2> Good:</h2>
        <h2>Bad: </h2>
      </div>
    </div>
  );
}

// const RandomImage = () => {
//   const image = images[Math.floor(Math.random() * images.length)];
//   return <img src={image} alt="" />;
// };
