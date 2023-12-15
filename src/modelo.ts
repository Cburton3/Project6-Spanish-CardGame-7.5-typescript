// export let currentScore = 0;
export const partida: Partida = {
  currentScore: 0,
  numeroDeIntentos: 0,
};

interface Partida {
  currentScore: number;
  numeroDeIntentos: number;
} //defines what is, like a plan of a house

export const setCurrentScore = (currentScore: number) => {
  partida.currentScore = currentScore;
};
