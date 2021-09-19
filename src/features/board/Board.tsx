import React from 'react';
import styled from 'styled-components';

import { Square } from './components/Square';
import { useAppSelector } from '../../app/hooks';
import { FigureImage } from './components/FigureImage';

interface Props {
  size: number;
  className?: string
}

const Board: React.FC<Props> = ({ className }) => {
  const board = useAppSelector(state => state.board.board);
  const squares = [];

  for (const row in board) {
    for (const column in board[row]) {
      const figure = board[row][column].getFigure();
      const square = (
        <Square
          key={`${row}:${column}`}
          coordinate={{ x: parseInt(row), y: parseInt(column) }}
        >
          {figure &&
            <FigureImage figure={figure} />
          }
        </Square>
      )

      squares.push(square);
    }
  }

  return (
    <div className={className}>
      { squares }
    </div>
  )
}

const StyledBoard = styled(Board)`
  display: grid;
  grid-template-columns: repeat(${props => props.size}, 70px);
  grid-template-rows: repeat(${props => props.size}, 70px);
  grid-gap: 0;
`;

export default StyledBoard;
