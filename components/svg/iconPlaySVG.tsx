import React from 'react';

interface iPlaySVG {
  size?: string;
}

const BtnPlaySVG: React.FC<iPlaySVG> = ({size = '66px'}) => {
  return (
    <div>
      <svg
        aria-hidden='true'
        focusable='false'
        data-prefix='far'
        data-icon='play-circle'
        className='svg-inline--fa fa-play-circle fa-w-16'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        height={size}
        width={size}
      >
        <path
          fill='white'
          d='M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z'
        ></path>
      </svg>
    </div>
  );
};

export default BtnPlaySVG;
