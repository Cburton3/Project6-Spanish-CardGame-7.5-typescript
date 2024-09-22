import { hitMe, stickHandle, handleReset } from "./ui";

const newCard = document.getElementById("hitMe");
if (newCard !== null && newCard !== undefined) {
  newCard.addEventListener("click", hitMe);
}

//STICK BUTTON

const stick = document.getElementById("stick");
if (stick !== null && stick !== undefined) {
  stick.addEventListener("click", stickHandle);
}

//RESET BUTTON

const reset = document.getElementById("reset");
if (reset !== null && reset !== undefined) {
  reset.addEventListener("click", handleReset);
}
