import { Board } from '../types';

const numberToEngLetter = (x: number): string => {
  return String.fromCharCode(97 + x);
}

export function createBoard(size = 8): Board {
  const board: Board = {};

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      board[i][numberToEngLetter(j)] = {};
    }
  }
  return board;
}
