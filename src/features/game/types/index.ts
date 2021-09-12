import { Figure } from './figures/Figure';

type Row = number;
type Column = string

export interface Board {
  [row: Row]: {
    [column: Column]: Record<string, unknown>
  }
}

export interface Coordinate {
  row: Row;
  column: Column;
}

export interface Cell {
  coordinate: Coordinate;
  figure: Figure;
}
