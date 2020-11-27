import React from 'react';

interface iVideoSVG {
  size: string;
}

const VideoSVG: React.FC<iVideoSVG> = ({size = '34px'}) => {
  return (
    <div className="flex justify-center p-12">
      <svg
        version='1.0'
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 225.000000 225.000000'
        preserveAspectRatio='xMidYMid meet'
      >
        <metadata>
          Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g
          transform='translate(0.000000,225.000000) scale(0.100000,-0.100000)'
          fill='yellow'
          stroke='none'
        >
          <path
            d='M1619 1216 c-183 -49 -263 -220 -187 -398 31 -73 93 -122 245 -194
            154 -74 183 -97 183 -149 0 -74 -46 -108 -146 -109 -71 0 -138 33 -175 87 -12
            17 -24 34 -25 36 -2 2 -150 -79 -172 -95 -8 -5 59 -93 90 -119 18 -16 62 -42
            98 -59 62 -30 71 -31 190 -31 114 0 130 2 180 26 123 58 170 131 170 264 0
            164 -61 232 -313 345 -103 46 -147 83 -147 125 0 53 35 92 85 96 59 4 79 -2
            117 -41 22 -22 42 -40 44 -40 3 0 86 52 153 97 9 6 -51 83 -83 108 -74 56
            -206 78 -307 51z'
          />
          <path
            d='M1017 1214 c-4 -4 -7 -180 -7 -391 0 -421 -2 -436 -58 -449 -15 -3
            -32 -7 -39 -9 -39 -12 -109 33 -142 92 -7 14 -21 8 -95 -36 l-86 -52 17 -27
            c32 -53 97 -111 147 -134 43 -19 68 -23 157 -23 98 0 110 2 165 30 43 22 68
            43 91 79 56 83 57 95 58 526 l0 395 -101 3 c-55 1 -103 0 -107 -4z'
          />
        </g>
      </svg>
    </div>
  );
};

export default VideoSVG;
