import React from 'react';
interface iClickNext {
  onNext: () => void;
}

const ArrowNextSVG: React.FC<iClickNext> = ({ onNext }) => {
  return (
    <button onClick={onNext}>
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle r='15.5' transform='matrix(-1 0 0 1 16 16)' stroke='#EAEAEA' />
        <path
          d='M13.2895 19.88L17.1695 16L13.2895 12.12C12.8995 11.73 12.8995 11.1 13.2895 10.71C13.6795 10.32 14.3095 10.32 14.6995 10.71L19.2895 15.3C19.6795 15.69 19.6795 16.32 19.2895 16.71L14.6995 21.3C14.3095 21.69 13.6795 21.69 13.2895 21.3C12.9095 20.91 12.8995 20.27 13.2895 19.88Z'
          fill='#4E4E4E'
        />
      </svg>
    </button>
  );
};

export default ArrowNextSVG;
