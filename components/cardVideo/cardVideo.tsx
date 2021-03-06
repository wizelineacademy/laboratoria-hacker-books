import React from 'react';

// Components
import ScoreStarSVG from '../svg/scoreStarSVG';
import IconPlaySVG from '../svg/iconPlaySVG';

// Styles
import styles from './cardVideo.module.css'

interface iCard {
  title: string,
  alt?: string,
  src?: string
}

interface iPlaySVG {
  size: string;
}

interface iScoreSVG {
  sizeScore: string;
}

type Props = iCard | iPlaySVG | iScoreSVG;

  const CardVideo: React.FC<Props> = props => {

    const { title, src } = props as iCard;
    const { size } = props as iPlaySVG;
    const { sizeScore } = props as iScoreSVG;

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <div  className="flex justify-center">
        <img src={src} alt="course" style={{height: '188px'}}/>
         <div  className='place-self-center absolute'>
        <IconPlaySVG size={size} />
         </div>
      </div>
      <div className='px-6 py-4'>
        <h2 className='font-bold text-xl mb-2'>{title}</h2>
      </div>
      <div className='mx-6 mt-2 mb-2 rounded-full bg-gray-200'>
        <span className='inline-block text-sm font-semibold text-gray-700 mr-2'>
          <ScoreStarSVG size={sizeScore} />
        </span>
        <span className='inline-block text-sm font-semibold text-gray-700 mr-2'>
          <ScoreStarSVG size={sizeScore} />
        </span>
        <span className='inline-block text-sm font-semibold text-gray-700 mr-2'>
          <ScoreStarSVG size={sizeScore} />
        </span>
      </div>
    </div>
  );
};

export default CardVideo;
