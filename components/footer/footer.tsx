import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full h-16 flex justify-center align-middle bg-white'>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by
        <img src='/vercel.svg' alt='Vercel Logo' className='h-3' />
      </a>
    </footer>
  );
};

export default Footer;
