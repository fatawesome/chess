import { Color, Position } from '../../../../types';
import { Figure } from './Figure';

export class Queen extends Figure {
  constructor(color: Color, position: Position) {
    super(color, position, 'queen');
  }
}
