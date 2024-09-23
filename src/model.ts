interface Game {
  currentScore: number;
  numberOfAttempts: number;
}

export const game: Game = {
  currentScore: 0,
  numberOfAttempts: 0,
};

export const setCurrentScore = (currentScore: number) => {
  game.currentScore = currentScore;
};
