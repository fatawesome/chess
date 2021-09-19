import { Board, Pawn, Rook, Knight, Bishop, Queen, King } from '../types';
import { createEmptyBoard } from './board';

const FILLERS = [pawns, rooks, knights, bishops, queens, kings];

export function createDefaultStartingBoard(): Board {
  const board = createEmptyBoard();
  FILLERS.map(fn => fn(board));
  return board;
}

export function fillDefaultFigures(board: Board): Board {
  FILLERS.map(fn => fn(board));
  return board;
}

function pawns(board: Board): void {
  for (let i = 0; i < 8; i++) {
    board[1][i].setFigure(new Pawn('white'));
    board[6][i].setFigure(new Pawn('black'));
  }
}

function rooks(board: Board): void {
  board[0][0].setFigure(new Rook('white'));
  board[0][7].setFigure(new Rook('white'));
  board[7][0].setFigure(new Rook('black'));
  board[7][7].setFigure(new Rook('black'));
}

function knights(board: Board): void {
  board[0][1].setFigure(new Knight('white'));
  board[0][6].setFigure(new Knight('white'));
  board[7][1].setFigure(new Knight('black'));
  board[7][6].setFigure(new Knight('black'));
}

function bishops(board: Board): void {
  board[0][2].setFigure(new Bishop('white'));
  board[0][5].setFigure(new Bishop('white'));
  board[7][2].setFigure(new Bishop('black'));
  board[7][5].setFigure(new Bishop('black'));
}

function queens(board: Board): void {
  board[0][3].setFigure(new Queen('white'));
  board[7][3].setFigure(new Queen('black'));
}

function kings(board: Board): void {
  board[0][4].setFigure(new King('white'));
  board[7][4].setFigure(new King('black'));
}
