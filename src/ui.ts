import { game, setCurrentScore } from "./model";
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
    scoreElement.innerHTML = `Your score is ${game.currentScore}`;
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
    newCard.disabled = true;
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
    scoreElement.textContent = "You nailed it! Welldone!";
  }
  disableButtons();
}

export function gameOver() {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.textContent = "Game Over, better luck next time!";
  }
  disableButtons();
}

export function endGameMessage(finalScore: number) {
  const scoreElement = document.getElementById("score");
  let scoreIntro = `Your final score is ${game.currentScore}.`;

  if (scoreElement && finalScore && finalScore < 4) {
    scoreElement.innerHTML = `${scoreIntro} "That was very conservative..."`;
  } else if (scoreElement && finalScore && finalScore <= 5) {
    scoreElement.innerHTML = `${scoreIntro} "Got a taste but didnt want more eh?"`;
  } else if (scoreElement && finalScore && finalScore <= 7) {
    scoreElement.innerHTML = `${scoreIntro} "Almost...there..."`;
  } else if (scoreElement) {
    scoreElement.innerHTML = "Score not recognised";
  }
}

const resetScore = () => {
  game.currentScore = 0;
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.innerHTML = `Your score is ${game.currentScore}`;
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

  const newPoints = addPoints(points);

  setCurrentScore(newPoints);

  showScore();

  checkGame(game.currentScore);
}

function checkGame(finalScore: number) {
  if (finalScore > 7.5) {
    gameOver();
  }
  if (finalScore === 7.5) {
    winGame();
  }
}

export const stickHandle = () => {
  endGameMessage(game.currentScore);
  disableButtons();
};

export const handleReset = () => {
  resetScore();
  resetCard();
  resetButtons();
};
