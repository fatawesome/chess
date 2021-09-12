import { Figure } from './Figure';
import { Color, Position } from '../../../../types';

export class Pawn extends Figure {
  constructor(color: Color, position: Position) {
    super(color, position, 'pawn');
  }
}
