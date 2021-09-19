import React from 'react';
import styled from 'styled-components';
import { Coordinate } from '../../utils/board';

interface Props {
  coordinate: Coordinate;
  active?: boolean;
  className?: string;
}

enum SquareColor {
  Dark = '#441a03',
  Light = '#b5915f',
  Active = 'lightgreen',
  Danger = 'lightred'
}

const isLight = (coordinate: Coordinate) => coordinate.x % 2 === coordinate.y % 2

function getSquareColor({ coordinate, active }: Props): SquareColor {
  if (active) { return SquareColor.Active; }
  if (isLight(coordinate)) { return SquareColor.Light; }
  return SquareColor.Dark;
}

const Square: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      { props.children }
    </div>
  )
}

const StyledSquare = styled(Square)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => getSquareColor(props)};
`

export default StyledSquare;
