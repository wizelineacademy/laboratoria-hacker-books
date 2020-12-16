import React from 'react';

// Components
import CardVideo from '../cardVideo/cardVideo';
import ArrowPrevSVG from '../svg/arrowPrevSVG';
import ArrowNextSVG from '../svg/arrowNextSVG';

// Styles
import styles from '../../styles/Home.module.css';

interface iCard {
  title: string,
  alt?: string,
  src?: string
}

interface iVideoList {
  cards?: Array<iCard>;
  setPrevVideoIndex?: () => void;
  setNextVideoIndex?: () => void;
}

const VideoCardList: React.FC<iVideoList> = ({ cards, setPrevVideoIndex, setNextVideoIndex }) => {
  return (
    <div className={`${styles.containerCard} bg-gray-200`}>
      <ArrowPrevSVG onPrev={setPrevVideoIndex} />
      {cards.map((card) => {
        return (
          <div key={card.alt} className='w-full mx-2 bg-white'>
            <CardVideo {...card} />
          </div>
        );
      })}
      <ArrowNextSVG onNext={setNextVideoIndex} />
    </div>
  );
};

export default VideoCardList;
