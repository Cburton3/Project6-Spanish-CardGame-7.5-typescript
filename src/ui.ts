import { partida, setCurrentScore } from "./modelo";
import {
  addPoints,
  givePointCard,
  giveUrlCard,
  giveCardNumber,
  giveRandomNumber,
} from "./motor";

const showScore = () => {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.innerHTML = `Your score is ${partida.currentScore}`;
  }
};

function printUrlImage(urlCard: string) {
  const imgElement = document.getElementById("startCard");
  if (
    imgElement !== null &&
    imgElement !== undefined &&
    imgElement instanceof HTMLImageElement
  ) {
    imgElement.src = urlCard;
  }
}

const disableButtons = () => {
  const newCard = document.getElementById("hitMe");
  if (
    newCard !== null &&
    newCard !== undefined &&
    newCard instanceof HTMLButtonElement
  ) {
    //add instance of
    newCard.disabled = true; //change to var
  }
  const stick = document.getElementById("stick");
  if (
    stick !== null &&
    stick !== undefined &&
    stick instanceof HTMLButtonElement
  ) {
    stick.disabled = true;
  }
};

export function winGame() {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.textContent = "¡Lo has clavado! ¡Enhorabuena!";
  }
  disableButtons();
};

export function gameOver() {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.textContent = "Game Over, better luck next time!";
  }
  disableButtons();
};

let message = "";
export function endGameMessage(finalScore: number) {
  if (finalScore < 4) {
    message = "Has sido muy conservador";
  } else if (finalScore <= 5) {
    message = "Te ha entrado el canguelo eh?";
  } else if (finalScore <= 7) {
    message = "Casi casi...";
  } else {
    message = "Puntuacion no reconocida";
  }
};

function finalScoreMessage() {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.innerHTML = `Your final score is ${partida.currentScore}. ${message}`;
  }
};

//reset button

const resetScore = () => {
  partida.currentScore = 0;
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.innerHTML = `Your score is ${partida.currentScore}`;
  }
};

const resetButtons = () => {
  const newCard = document.getElementById("hitMe");
  if (
    newCard !== null &&
    newCard !== undefined &&
    newCard instanceof HTMLButtonElement
  ) {
    newCard.disabled = false;
  }
  const stick = document.getElementById("stick");
  if (
    stick !== null &&
    stick !== undefined &&
    stick instanceof HTMLButtonElement
  ) {
    stick.disabled = false;
  }
};

export const resetCard = () => {
  const urlCard = giveUrlCard(0);
  printUrlImage(urlCard);
};

export function hitMe() {
  const randomNumber = giveRandomNumber();

  const cardNumber = giveCardNumber(randomNumber);

  const urlCard = giveUrlCard(cardNumber);

  printUrlImage(urlCard);

  const points = givePointCard(cardNumber);

  //addPoints(points);
  const newPoints = addPoints(points);

  setCurrentScore(newPoints);

  showScore();

  checkGame(partida.currentScore);
};


function checkGame(finalScore: number) {
  if (finalScore > 7.5) {
    gameOver();
  }
  if (finalScore === 7.5) {
    winGame();
  }
};

export const stickHandle = () => {
  endGameMessage(partida.currentScore);
  finalScoreMessage();
  disableButtons();
};

export const handleReset = () => {
  resetScore();
  resetCard();
  resetButtons();
};