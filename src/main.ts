let currentScore = 0;

const showScore = () => {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.innerHTML = `Your score is ${currentScore}`;
  }
};

function giveUrlCard(card: number) {
  switch (card) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
}

function printUrlImage(urlCard : string) {
  const imgElement = document.getElementById("startCard");
  if (imgElement !== null && imgElement !== undefined && imgElement instanceof HTMLImageElement) {//que el var tiene un value 
    imgElement.src = urlCard;
  }
}//if the type of var corresponds to that in the 'instance of', then can exe fx 

function givePointCard(card : number) {
  console.log(card);
  return card <= 7 ? card : 0.5;
}

let message = "";
function checkGame(finalScore : number) {
  if (finalScore > 7.5) {
    gameOver();
  }
  if (finalScore === 7.5) {
    winGame();
  }
}

const disableButtons = () => {
  const newCard = document.getElementById("hitMe");
  if (newCard !== null && newCard !== undefined && newCard instanceof HTMLButtonElement) { //add instance of 
    newCard.disabled = true;//change to var 
  }
  const stick = document.getElementById("stick");
  if (stick !== null && stick !== undefined && stick instanceof HTMLButtonElement) {
    stick.disabled = true;
  }
};

function winGame() {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.textContent = "¡Lo has clavado! ¡Enhorabuena!";
  }
  disableButtons();
}

function gameOver() {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.textContent = "Game Over, better luck next time!";
  }
  disableButtons();
}

const giveRandomNumber = () => {
  return Math.ceil(Math.random() * 10);
};

const giveCardNumber = (randomNumber : number) => {
  if (randomNumber > 7) {
    randomNumber = randomNumber + 2;
  }
  return randomNumber;
};

const addPoints = (points : number) => {
  currentScore = currentScore + points;
};

function hitMe() {
  const randomNumber = giveRandomNumber();

  const cardNumber = giveCardNumber(randomNumber);

  const urlCard = giveUrlCard(cardNumber);

  printUrlImage(urlCard);

  const points = givePointCard(cardNumber);

  addPoints(points);

  showScore();
  checkGame(currentScore);
}

const newCard = document.getElementById("hitMe");
if (newCard !== null && newCard !== undefined) {
  newCard.addEventListener("click", hitMe);
}

//STICK BUTTON

function endGameMessage(finalScore : number) {
  if (finalScore < 4) {
    message = "Has sido muy conservador";
  } else if (finalScore <= 5) {
    message = "Te ha entrado el canguelo eh?";
  } else if (finalScore <= 7) {
    message = "Casi casi...";
  } else {
    message = "Puntuacion no reconocida";
  }
}

function finalScoreMessage() {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.innerHTML = `Your final score is ${currentScore}. ${message}`;
  }
}

const stickHandle = () => {
  endGameMessage(currentScore);
  finalScoreMessage();
  disableButtons();
};

const stick = document.getElementById("stick");
if (stick !== null && stick !== undefined) {
  stick.addEventListener("click", stickHandle);
}

//RESET BUTTON

const resetScore = () => {
  currentScore = 0;
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.innerHTML = `Your score is ${currentScore}`;
  }
};

const resetButtons = () => {
  const newCard = document.getElementById("hitMe");
  if (newCard !== null && newCard !== undefined && newCard instanceof HTMLButtonElement) {
    newCard.disabled = false;
  }
  const stick = document.getElementById("stick");
  if (stick !== null && stick !== undefined && stick instanceof HTMLButtonElement) {
    stick.disabled = false;
  }
};

const resetCard = () => {
  const urlCard = giveUrlCard(0);
  printUrlImage(urlCard);
};

const handleReset = () => {
  resetScore();
  resetCard();
  resetButtons();
};

const reset = document.getElementById("reset");
if (reset !== null && reset !== undefined) {
  reset.addEventListener("click", handleReset);
};
