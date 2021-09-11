import { Position } from '../../types';

export type Coordinate = Position;

export function generateCoordinates(size: number): Coordinate[] {
  const coordinates: Coordinate[] = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      coordinates.push({ x: i, y: j })
    }
  }
  return coordinates;
}
