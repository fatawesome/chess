import { Color, Position } from '../../types';
import { Figure } from './Figure';

export class Rook extends Figure {
  constructor(color: Color, position: Position) {
    super(color, position, 'rook');
  }
}
