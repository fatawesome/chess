import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly active?: boolean;
  className?: string;
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
  background-color: ${props => props.active ? 'lightgreen' : 'transparent'};
`

export default StyledSquare;
