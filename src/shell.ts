// import { partida } from "./modelo";

import {
  hitMe,
  stickHandle,
  handleReset
} from "./ui";

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
};


//notas from Antonio
//lo ideal, es que ui dependa de motor, pero que motor, no dependa de ui
// other fxs to UI, evita que si una función que tienes en ui, no la vas a usar en otro fichero, por ejemplo en shell, no hace falta exportarla. solo exportamos aquellas funciones que nos hacen falta