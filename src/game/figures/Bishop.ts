import { Color, Position } from '../../types';
import { Figure } from './Figure';

export class Bishop extends Figure {
  constructor(color: Color, position: Position) {
    super(color, position, 'bishop');
  }
}
