import { Board, Cell, Figure } from '../types';
import { Position } from '../../../types';

export type Coordinate = Position;

export const numberToEngLetter = (x: number): string => {
  return String.fromCharCode(97 + x);
}

export const engLetterToNumber = (x: string): number => {
  return x.charCodeAt(0) - 97;
}

export function createEmptyBoard(size = 8): Board {
  const board: Board = {};

  for (let i = 0; i < size; i++) {
    board[i] = {};
    for (let j = 0; j < size; j++) {
      board[i][j] = new Cell({ x: i, y: j });
    }
  }
  return board;
}

export function generateCoordinates(size: number): Coordinate[] {
  const coordinates: Coordinate[] = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      coordinates.push({ x: i, y: j })
    }
  }
  return coordinates;
}

export function getFigureSlug(figure: Figure): string {
  return `${figure.getColor()}-${figure.getType()}`;
}
