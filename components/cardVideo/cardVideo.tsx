import React from 'react';

// Components
import ScoreStarSVG from '../svg/scoreStarSVG';
import IconPlaySVG from '../svg/iconPlaySVG';

const CardVideo = ({ card }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg w-3-5'>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
        <IconPlaySVG />
      </div>
      <div className='px-6 py-4'>
        <h2 className='font-bold text-xl mb-2'>{card.title}</h2>
      </div>
      <div className='mx-6 mt-2 mb-2 rounded-full bg-gray-200'>
        <span className='inline-block text-sm font-semibold text-gray-700 mr-2'>
          <ScoreStarSVG />
        </span>
        <span className='inline-block text-sm font-semibold text-gray-700 mr-2'>
          <ScoreStarSVG />
        </span>
        <span className='inline-block text-sm font-semibold text-gray-700 mr-2'>
          <ScoreStarSVG />
        </span>
      </div>
    </div>
  );
};

export default CardVideo;
