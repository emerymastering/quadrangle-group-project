import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectScore } from "../store_equals/characters/selectors";
import imageWinner from "../img_equalgame/winner.png";
import "./style.css";

export default function Winner() {
  const points = useSelector(selectScore);
  return (
    <div className="container">
      <h2 className="text-fuchsia-500">
        You are the winner baby and you have {points} points
      </h2>
      <Link
        to="/"
        className="transition ease-in duration-300 text-fuchsia-500 border-cust-pink border-8 border-solid rounded-2xl py-4 px-6 text-3xl font-bold drop-shadow-3xl contrast-200 brightness-200 hover:text-black hover:bg-cust-pink hover:drop-shadow-4xl"
      >
        Back to home
      </Link>
      <img src={imageWinner} alt="" width="600" className="winner absolute" />
    </div>
  );
}

//

// .button {
//   color: #db3eb1;
//   border: 6px solid #db3eb1;
//   border-radius:15px;
//   padding: 15px 25px;
//   font-size: 30px;
//   font-family: tahoma;
//   letter-spacing:5px;
//   cursor: pointer;
//   font-weight: bold;
//   filter: drop-shadow(0 0 15px #db3eb1) drop-shadow(0 0 50px #db3eb1) contrast(2) brightness(2);
//   transition: .5s;
// }

// .button:hover {
//   color: black;
//   background-color: #db3eb1;
//   filter: drop-shadow(0 0 20px #db3eb1) contrast(2) brightness(2);
// }
