import { Color } from '../../../../types';
import { Figure } from './Figure';
import { Coordinate } from '../index';

export class Rook extends Figure {
  constructor(color: Color) {
    super(color, 'rook');
  }

  validateMove(from: Coordinate, to: Coordinate): boolean {
    return from.x === to.x
      ? from.y !== to.y
      : from.y === to.y;
  }
}
