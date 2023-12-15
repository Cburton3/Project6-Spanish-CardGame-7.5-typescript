import { partida } from "./modelo";

import {
  disableButtons,
  endGameMessage,
  finalScoreMessage,
  resetScore,
  resetButtons,
  hitMe,
  resetCard,
} from "./ui";

const newCard = document.getElementById("hitMe");
if (newCard !== null && newCard !== undefined) {
  newCard.addEventListener("click", hitMe);
}

//STICK BUTTON

const stickHandle = () => {
  endGameMessage(partida.currentScore);
  finalScoreMessage();
  disableButtons();
};

const stick = document.getElementById("stick");
if (stick !== null && stick !== undefined) {
  stick.addEventListener("click", stickHandle);
}

//RESET BUTTON

const handleReset = () => {
  resetScore();
  resetCard();
  resetButtons();
};

const reset = document.getElementById("reset");
if (reset !== null && reset !== undefined) {
  reset.addEventListener("click", handleReset);
};
