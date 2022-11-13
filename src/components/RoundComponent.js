import Stack from "@mui/material/Stack";
import { IconButton, Button, Box } from "@mui/material";
import Circle from "@mui/icons-material/Circle";
import { useState } from "react";
import { COLORS } from "../config/MasterMindConfig";

export const RoundComponent = (props) => {
  const code = props.code;
  const turn = props.turn;
  const id = props.id;
  const colors = COLORS;
  const [pinArray, setPinArray] = useState(["grey", "grey", "grey", "grey"]);
  const [clueArray, setClueArray] = useState(["grey", "grey", "grey", "grey"]);

  const checkCode = () => {
    let rightPlace = 0;
    let wrongPlace = 0;
    const checkCode = [...code];
    const checkPin = [...pinArray];
    let i = 0;
    while (i < checkCode.length) {
      if (checkCode[i] === checkPin[i]) {
        rightPlace++;
        checkCode.splice(i, 1);
        checkPin.splice(i, 1);
        i = 0;
      } else {
        i++;
      }
    }
    if (rightPlace === 4) {
      setClues(rightPlace, wrongPlace);
      return true;
    } else {
      let k = 0;
      while (k < checkCode.length) {
        if (checkPin.indexOf(checkCode[k]) >= 0) {
          wrongPlace++;
          const index = checkPin.indexOf(checkCode[k]);
          checkCode.splice(k, 1);
          checkPin.splice(index, 1);

          k = 0;
        } else {
          k++;
        }
      }

      setClues(rightPlace, wrongPlace);
      return false;
    }
  };
  const setClues = (rightPlace, wrongPlace) => {
    const totalCount = rightPlace + wrongPlace;
    const checkClue = [...clueArray];
    let i = 0;
    while (i < totalCount) {
      checkClue.pop();
      i++;
    }
    let z = 0;
    while (z < rightPlace) {
      checkClue.push("green");
      z++;
    }
    let y = 0;
    while (y < wrongPlace) {
      checkClue.push("yellow");
      y++;
    }
    setClueArray([...checkClue]);
  };

  const changeColor = (pinIndex) => {
    console.log(pinIndex);
    if (pinArray[pinIndex] === "grey" || pinArray[pinIndex] === colors[4]) {
      pinArray[pinIndex] = colors[0];

      setPinArray([...pinArray]);
    } else {
      const index = colors.indexOf(pinArray[pinIndex]);
      pinArray[pinIndex] = colors[index + 1];
      setPinArray([...pinArray]);
    }
  };

  return (
    <Stack disabled={true} direction="row" spacing={1}>
      <Stack direction="row" spacing={1}>
        {pinArray.map((item, index) => {
          return (
            <IconButton
              //   disabled={!turn}
              key={index}
              onClick={() => {
                if (turn) {
                  changeColor(index);
                }
              }}
              sx={{ color: pinArray[index] }}
            >
              <Circle />
            </IconButton>
          );
        })}
      </Stack>
      <Button
        disabled={!turn || pinArray.some((item) => item === "grey")}
        onClick={() => {
          props.didWin(checkCode(), id);
        }}
      >
        Check
      </Button>
      <Stack>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "5px",
            alignContent: "space-around",
            width: "30px",
            height: "30px",
          }}
        >
          {clueArray.map((box, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: box,
                }}
              />
            );
          })}
        </div>
      </Stack>
    </Stack>
  );
};
