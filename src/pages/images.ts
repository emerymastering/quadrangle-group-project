const food1 = require("../images/foods/1.jpg");
const food2 = require("../images/foods/2.jpg");
const food3 = require("../images/foods/3.jpg");
const food4 = require("../images/foods/4.jpg");
const food5 = require("../images/foods/5.jpg");

interface FoodImage {
  image: any;
  type: "v" | "m";
}

export const imagesFood: FoodImage[] = [
  { image: food1, type: "v" },
  { image: food2, type: "m" },
  { image: food3, type: "v" },
  { image: food4, type: "v" },
  { image: food5, type: "m" },
];
