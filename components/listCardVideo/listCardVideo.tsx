import React from 'react';

// Components
import CardVideo from '../cardVideo/cardVideo';

// Styeles
import styles from '../../styles/Home.module.css';

const ListCardVideo = ({ cards }) => {
  return (
    <div className={`${styles.containerCard} bg-gray-200`}>
      {cards.map((card: any) => {
        return (
          <div key={card.alt} className={`${styles.width100} mx-2 bg-white`}>
            <CardVideo card={card} />
          </div>
        );
      })}
    </div>
  );
};

export default ListCardVideo;
