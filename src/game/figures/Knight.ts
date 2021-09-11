import { Color, Position } from '../../types';
import { Figure } from './Figure';

export class Knight extends Figure {
  constructor(color: Color, position: Position) {
    super(color, position, 'knight');
  }
}
