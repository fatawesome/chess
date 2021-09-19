import React from 'react';
import { Figure } from '../../types';
import { getFigureSlug } from '../../utils/board';

interface Props {
  figure: Figure;
}

const FigureImage: React.FC<Props> = ({ figure }) => {
  return <img src={require(`@assets/svg/figures/${getFigureSlug(figure)}.svg`)} alt={getFigureSlug(figure)} />
}

export default FigureImage;
