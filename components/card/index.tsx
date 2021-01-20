import React from 'react';

interface iCard {
  color?: string
  withShadow?: boolean
}

const Card: React.FC<iCard> = ({ children, color = 'white', withShadow = true }) => {
  return (
    <div className={`bg-${color}${(color !== 'white' && '-200') || ''} rounded-lg p-6${withShadow ? ' shadow-md' : ''}`}>
      {children}
    </div>
  );
};

export default Card;
