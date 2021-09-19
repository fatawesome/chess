import { Figure } from './figures';

type Row = number;
type Column = number;

export interface Board {
  [row: Row]: {
    [column: Column]: Cell
  }
}

export interface Coordinate {
  x: Row;
  y: Column;
}

export class Cell {
  constructor(
    readonly coordinate: Coordinate,
    private figure?: Figure
  ) {}

  public getFigure(): Figure | undefined {
    return this.figure;
  }

  public setFigure(figure: Figure | undefined): void {
    this.figure = figure;
  }
}

export * from './figures';
