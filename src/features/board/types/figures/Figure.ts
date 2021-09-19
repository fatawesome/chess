import { Color, FigureType } from '../../../../types';
import { Coordinate } from '../index';

export abstract class Figure {
  protected constructor(
    private color: Color,
    private type: FigureType,
  ) {}

  public getType(): FigureType {
    return this.type;
  }
  public setType(type: FigureType): void {
    this.type = type;
  }

  public getColor(): Color {
    return this.color;
  }

  abstract validateMove(from: Coordinate, to: Coordinate): boolean;
}
