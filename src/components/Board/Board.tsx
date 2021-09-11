import React from 'react';
import styled from 'styled-components';

import { Square } from '../Square';
import { generateCoordinates } from './utils';

interface Props {
  size: number;
  className?: string
}

const Board: React.FC<Props> = ({ className, size }) => {
  const coordinates = generateCoordinates(size);
  const blocks = coordinates.map(coordinate => (
    <Square
      key={`${coordinate.x}:${coordinate.y}`}
      active={true}
    >
      X
    </Square>
  ))

  return (
    <div className={className}>
      { blocks }
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
