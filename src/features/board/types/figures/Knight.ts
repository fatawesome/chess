import { Color } from '../../../../types';
import { Figure } from './Figure';
import { Coordinate } from '../index';

export class Knight extends Figure {
  constructor(color: Color) {
    super(color, 'knight');
  }

  validateMove(from: Coordinate, to: Coordinate): boolean {
    return (Math.abs(to.x - from.x) === 1 && Math.abs(to.y - from.y) === 2)
      || (Math.abs(to.x - from.x) === 2 && Math.abs(to.y - from.y) === 1);
  }
}
