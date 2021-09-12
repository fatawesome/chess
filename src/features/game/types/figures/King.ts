import { Color, Position } from '../../../../types';
import { Figure } from './Figure';

export class King extends Figure {
  constructor(color: Color, position: Position) {
    super(color, position, 'king');
  }
}
