import { START_GAME, NEXT_QUESTION, END_GAME } from './ActionTypes';

export const startGame = region => ({
  type: START_GAME,
  region
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION
});

export const endGame = () => ({
  type: END_GAME
});
