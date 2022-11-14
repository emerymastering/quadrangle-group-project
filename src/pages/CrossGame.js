import imageadult1 from "../img_crossgame/adult1.png";
import imageadult2 from "../img_crossgame/adult2.png";
import imagechild2 from "../img_crossgame/kid2.png";
import imagechild3 from "../img_crossgame/kid3.png";
import MoveCharacter from "../components_crossgame/MoveCharacter";
import { useState, useEffect } from "react";

export default function CrossGame() {
  const image = [imageadult1, imageadult2, imagechild2, imagechild3];
  //   let numRandom = Math.floor(Math.random() * 3);
  //   let imageRandom = image[numRandom];
  let [count, setCount] = useState(0);
  //   const [imagePrint, setImagePrint] = useState(image[count]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const imageToCompare = image[count % image.length];

  //   const image = [imageadult1, imageadult2, imagechild2, imagechild3];
  //   let numRandom = Math.floor(Math.random() * 3);
  return (
    <div className="flex justify-between h-screen  bg-landscape max-h-fit bg-no-repeat ">
      <div className="flex">
        <MoveCharacter
          character={imageadult1}
          imageToCompare={imageToCompare}
        />
        <MoveCharacter
          character={imageadult2}
          imageToCompare={imageToCompare}
        />
        <MoveCharacter
          character={imagechild2}
          imageToCompare={imageToCompare}
        />
        <MoveCharacter
          character={imagechild2}
          imageToCompare={imageToCompare}
        />
        <MoveCharacter
          character={imagechild3}
          imageToCompare={imageToCompare}
        />
      </div>

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
// export default function CrossGame() {
//   const imagerandom = imagechild2;
//   return (
//     <div className="flex justify-between h-screen  bg-landscape max-h-fit bg-no-repeat ">
//       <div>
//         <img src={imagechild2} alt="" />
//       </div>
//       {imagerandom === imagechild3 ? (
//         <MoveCharacter character={imagechild3} />
//       ) : (
//         "Loose"
//       )}
//     </div>
//   );
// }
