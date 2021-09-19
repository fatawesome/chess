import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Coordinate } from '../../utils/board';
import { Cell } from '../../types';
import { FigureImage } from '../FigureImage';

interface Props {
  cell: Cell
  active?: boolean;
  className?: string;
}

enum SquareColor {
  Dark = '#9f4b1d',
  Light = '#cea76a',
  Active = 'lightgreen',
  Danger = 'lightred'
}

const isLight = (coordinate: Coordinate) => coordinate.x % 2 === coordinate.y % 2

function getSquareColor(cell: Cell): SquareColor {
  if (isLight(cell.coordinate)) { return SquareColor.Light; }
  return SquareColor.Dark;
}

const Square: React.FC<Props> = ({ className, cell }) => {
  const figure = cell.getFigure();

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    console.log(cell)
  }

  return (
    <div className={className} onClick={onClick}>
      {figure &&
        <FigureImage figure={figure} />
      }
    </div>
  )
}

const StyledSquare = styled(Square)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => getSquareColor(props.cell)};
`

export default StyledSquare;
