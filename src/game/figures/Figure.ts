import { Color, FigureType, Position } from '../../types';

export abstract class Figure {
  protected constructor(
    private color: Color,
    private position: Position,
    private type: FigureType,
  ) {}

  public getPosition(): Position {
    return this.position;
  }
  public setPosition(position: Position): void {
    this.position = position
  }

  public getType(): FigureType {
    return this.type;
  }
  public setType(type: FigureType): void {
    this.type = type;
  }
}
