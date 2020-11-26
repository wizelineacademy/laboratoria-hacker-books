import React from 'react';

// Components
import CardVideo from '../cardVideo/cardVideo';

// Styles
import styles from '../../styles/Home.module.css';

interface iCard {
  title: string,
  alt?: string,
  src?: string
}

interface iVideoList {
  cards?: Array<iCard>
}

const VideoCardList: React.FC<iVideoList> = ({ cards }) => {
  return (
    <div className={`${styles.containerCard} bg-gray-200`}>
      {cards.map((card) => {
        return (
          <div key={card.alt} className={`${styles.width100} mx-2 bg-white`}>
            <CardVideo card={card} />
          </div>
        );
      })}
    </div>
  );
};

export default VideoCardList;
