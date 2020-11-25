import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// Components
import VideoCardList from '../components/videoCardList/videoCardList';
import ArrowPrevSVG from '../components/svg/arrowPrevSVG';
import ArrowNextSVG from '../components/svg/arrowNextSVG';

// Style
import styles from '../styles/Home.module.css';

interface iVideo {
  cards?: [{ title: string; alt: any; src: any }];
}

const Home: React.FC<iVideo> = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videosToShow, setVideosToShow] = useState([]);

  const cards = [
    { title: 'Course 1', alt: 'img1', src: '1' },
    { title: 'Course 2', alt: 'img2', src: '2' },
    { title: 'Course 3', alt: 'img3', src: '3' },
    { title: 'Course 4', alt: 'img4', src: '4' },
    { title: 'Course 5', alt: 'img5', src: '5' },
    { title: 'Course 6', alt: 'img6', src: '6' },
  ];

  useEffect(() => {
    const videosToShow = [];

    for (let i = currentVideoIndex; i <= currentVideoIndex + 3; i++) {
      videosToShow.push(cards[i]);
    }

    setVideosToShow(videosToShow);
  }, [currentVideoIndex]);

  const arrowNext = () => {
    if (currentVideoIndex < 2) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const arrowPrev = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} pb-1`}>Welcome to Next.js!</h1>
        <h3 className='p-3'>Category with button</h3>
        <div className='container mx-auto overflow-hidden w-1/2 bg-orange-100'>
          <VideoCardList cards={videosToShow} />
        </div>
        <div className='flex flex-row'>
          <ArrowPrevSVG onPrev={arrowPrev} />
          <ArrowNextSVG onNext={arrowNext} />
        </div>

        <h3 className='p-3'>Category with scroll</h3>
        <div className={`${styles.overflowList} container mx-auto overflow-hidden w-1/2 bg-gray-100`}>
          <VideoCardList cards={cards} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
