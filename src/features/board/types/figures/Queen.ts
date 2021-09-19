import { Color } from '../../../../types';
import { Figure } from './Figure';
import { Coordinate } from '../index';

export class Queen extends Figure {
  constructor(color: Color) {
    super(color, 'queen');
  }

  validateMove(from: Coordinate, to: Coordinate): boolean {
    return (Math.abs(from.x - to.x) === Math.abs(from.y - to.y))
      || from.x === to.x ? from.y !== to.y : from.y === to.y;
  }
}
