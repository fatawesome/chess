import { Figure } from './Figure';
import { Color } from '../../../../types';
import { Coordinate } from '../index';

function validateWhitePawnMove(from: Coordinate, to: Coordinate): boolean {
  return from.x === 1
    ? from.y === to.y && (from.x + 1 === to.x || from.x + 2 === to.x)
    : from.y === to.y && from.x + 1 === to.x;
}

function validateBlackPawnMove(from: Coordinate, to: Coordinate): boolean {
  return from.x === 6
    ? from.y === to.y && (from.x - 1 === to.x || from.x - 2 === to.x)
    : from.y === to.y && from.x - 1 === to.x;
}

export class Pawn extends Figure {
  constructor(color: Color) {
    super(color, 'pawn');
  }

  validateMove(from: Coordinate, to: Coordinate): boolean {
    return this.getColor() === 'white'
      ? validateWhitePawnMove(from, to)
      : validateBlackPawnMove(from, to);
  }
}
