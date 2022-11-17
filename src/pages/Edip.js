import { RoundComponent } from "../components";
import { COLORS, ROUNDS } from "../config/MasterMindConfig";
import { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export const Edip = () => {
  const colors = COLORS;
  const rounds = ROUNDS;

  let [roundArray, setRoundArray] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [didWin, setDidWin] = useState(null);

  const handleClose = () => {
    setOpen(false);
    startGame(rounds);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const createCode = () => {
    let codeArray = [];
    for (let i = 0; i < 4; i++) {
      codeArray.push(colors[Math.floor(Math.random() * 4)]);
    }
    console.log("code Array", codeArray);
    return codeArray;
  };
  const [code, setCode] = useState(createCode());

  const startGame = (rounds) => {
    let array = [];

    for (let i = 0; i < rounds; i++) {
      array.push(i);
    }
    console.log("array", array);
    setRoundArray([...array]);
  };
  const checkDidWin = (didWin, id) => {
    console.log("code", code);
    if (didWin) {
      win();
    } else {
      if (currentTurn === roundArray.length - 1) {
        loose();
      } else {
        setCurrentTurn(currentTurn + 1);
      }
    }
  };
  const win = () => {
    setDidWin(true);
    handleOpen();
    restart();
  };
  const loose = () => {
    setDidWin(false);
    handleOpen();
    restart();
  };
  const restart = () => {
    setCode(createCode());
    setRoundArray([]);
    setCurrentTurn(0);
  };

  useEffect(() => {
    startGame(rounds);
  }, [rounds]);

  return (
    <div
      style={{
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#2f3542",
      }}
    >
      <div style={{ border: "3px solid #2ed573", borderRadius: "16px" }}>
        <div>
          <Box sx={{}}>
            <Typography
              variant="h3"
              align="center"
              color={"#2ed573"}
              gutterBottom
            >
              Mastermind
            </Typography>
          </Box>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  textAlign="center"
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {didWin ? "You WON!" : "You LOST!"}
                  {didWin ? (
                    <EmojiEventsIcon
                      sx={{
                        width: 100,
                        height: 100,
                        color: "green",
                      }}
                    />
                  ) : (
                    <SentimentVeryDissatisfiedIcon
                      sx={{
                        width: 100,
                        height: 100,
                        color: "red",
                      }}
                    />
                  )}
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
        {roundArray.map((itemIndex) => {
          return (
            <RoundComponent
              key={itemIndex}
              id={itemIndex}
              code={code}
              turn={currentTurn === itemIndex}
              didWin={checkDidWin}
            />
          );
        })}
      </div>
      <Box visibility={false} sx={{ width: "500px" }}>
        <Typography color={"white"} variant="h6" gutterBottom>
          Try to guess the pattern, in both order and color, within ten turns.
          After submitting a row, a small green squared is show for each circle
          in a correct position and color. A yellow square indicates the
          existence of a correct color in an incorrect position.
        </Typography>
      </Box>
    </div>
  );
};
