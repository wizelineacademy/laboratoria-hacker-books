import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// Components
import VideoCardList from '../components/videoCardList/videoCardList';
import ArrowPrevSVG from '../components/svg/arrowPrevSVG';
import ArrowNextSVG from '../components/svg/arrowNextSVG';

// Style
import styles from '../styles/Home.module.css';

interface iCard {
  title: string,
  alt?: string,
  src?: string
}
interface iVideo {
  cards?: Array<iCard>;
  setPrevVideoIndex?: () => void;
  setNextVideoIndex?: () => void;
}

const MAX_VIDEOS_TO_SHOW = 3

const Home: React.FC<iVideo> = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [videosToShow, setVideosToShow] = useState<Array<iCard>>([]);

  const cards = [
    { title: 'Course 1', alt: 'img1', src: '1' },
    { title: 'Course 2', alt: 'img2', src: '2' },
    { title: 'Course 3', alt: 'img3', src: '3' },
    { title: 'Course 4', alt: 'img4', src: '4' },
    { title: 'Course 5', alt: 'img5', src: '5' },
    { title: 'Course 6', alt: 'img6', src: '6' },
    { title: 'Course 7', alt: 'img7', src: '7' },
    { title: 'Course 8', alt: 'img8', src: '8' },
  ];

  useEffect(() => {
    const videosToShow = [];

    for (let i = currentVideoIndex; i <= currentVideoIndex + MAX_VIDEOS_TO_SHOW; i++) {
      videosToShow.push(cards[i]);
    }

    setVideosToShow(videosToShow);
  }, [currentVideoIndex]);

  const setNextVideoIndex = () => {
    if (currentVideoIndex < cards.length - MAX_VIDEOS_TO_SHOW - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const setPrevVideoIndex = () => {
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
        <div className='container mx-auto bg-orange-100'>
          <VideoCardList cards={videosToShow} setPrevVideoIndex={setPrevVideoIndex} setNextVideoIndex={setNextVideoIndex} />
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
