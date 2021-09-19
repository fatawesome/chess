import { Color } from '../../../../types';
import { Figure } from './Figure';
import { Coordinate } from '../index';

export class King extends Figure {
  constructor(color: Color) {
    super(color, 'king');
  }

  validateMove(from: Coordinate, to: Coordinate): boolean {
    return Math.abs(from.x - to.x) <= 1 && Math.abs(from.y - to.y) <= 1;
  }
}
