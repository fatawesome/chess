import { Color } from '../../../../types';
import { Figure } from './Figure';
import { Coordinate } from '../index';

export class Bishop extends Figure {
  constructor(color: Color) {
    super(color, 'bishop');
  }

  validateMove(from: Coordinate, to: Coordinate): boolean {
    return Math.abs(from.x - to.x) === Math.abs(from.y - to.y);
  }
}

