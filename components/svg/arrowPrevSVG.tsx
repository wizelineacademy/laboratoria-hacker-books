import React from 'react';

const ArrowPrevSVG = ({ size = '34px' }) => {
  return (
    <div>
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='16' cy='16' r='15.5' stroke='#EAEAEA' />
        <path
          d='M18.7105 19.88L14.8305 16L18.7105 12.12C19.1005 11.73 19.1005 11.1 18.7105 10.71C18.3205 10.32 17.6905 10.32 17.3005 10.71L12.7105 15.3C12.3205 15.69 12.3205 16.32 12.7105 16.71L17.3005 21.3C17.6905 21.69 18.3205 21.69 18.7105 21.3C19.0905 20.91 19.1005 20.27 18.7105 19.88Z'
          fill='#4E4E4E'
        />
      </svg>
    </div>
  );
};

export default ArrowPrevSVG;
