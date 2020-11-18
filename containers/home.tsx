import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// Components
import ListCardVideo from '../components/listCardVideo/listCardVideo';
import ArrowPrevSVG from '../components/svg/arrowPrevSVG';
import ArrowNextSVG from '../components/svg/arrowNextSVG';

// Style
import styles from '../styles/Home.module.css';
interface iVideo {
  cards?: [{ title: string; alt: any; src: any }];
}

const Home: React.FC<iVideo> = () => {
  const [viewNextVideo, setViewNextVideo] = useState(0);
  const [showVideos, setShowVideos] = useState([]);

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

    for (let i = viewNextVideo; i <= viewNextVideo + 3; i++) {
      videosToShow.push(cards[i]);
    }

    setShowVideos(videosToShow);
  }, [viewNextVideo]);

  const arrowNext = () => {
    if (viewNextVideo < 2) {
      setViewNextVideo(viewNextVideo + 1);
    }
  };

  const arrowPrev = () => {
    if (viewNextVideo > 0) {
      setViewNextVideo(viewNextVideo - 1);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} pb-1`}>Welcome to Bookmark</h1>
        <h3 className='p-3'>Category with button</h3>
        <div className='container mx-auto overflow-hidden w-1/2 bg-orange-100'>
          <ListCardVideo cards={showVideos} />
        </div>
        <div className='flex flex-row'>
          <ArrowPrevSVG onPrev={arrowPrev} />
          <ArrowNextSVG onNext={arrowNext} />
        </div>

        <h3 className='p-3'>Category with scroll</h3>
        <div className={`${styles.overflowList} container mx-auto overflow-hidden w-1/2 bg-gray-100`}>
          <ListCardVideo cards={cards} />
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

//onClick?: () => void; //reload: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
//const arrowNext = (): void => {let next = setViewNextVideo((viewNextVideo + 1) % cards.length);};
//const arrowPrev = (): void => {if (viewNextVideo == 0) {setViewNextVideo(cards.length - 1);} else {setViewNextVideo(viewNextVideo - 1);}};
