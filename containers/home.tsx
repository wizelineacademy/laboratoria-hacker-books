
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// Components
import VideoCardList from '../components/videoCardList/videoCardList';
import ArrowPrevSVG from '../components/svg/arrowPrevSVG';
import ArrowNextSVG from '../components/svg/arrowNextSVG';
import Navbar from '../components/navbar/navbar';

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
    { title: 'Course 1', alt: 'img1', src: 'https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg' },
    { title: 'Course 2', alt: 'img2', src: 'https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg' },
    { title: 'Course 3', alt: 'img3', src: 'https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg' },
    { title: 'Course 4', alt: 'img4', src: 'https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg' },
    { title: 'Course 5', alt: 'img5', src: 'https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg' },
    { title: 'Course 6', alt: 'img6', src: 'https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg' },
    { title: 'Course 7', alt: 'img7', src: 'https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg' },
    { title: 'Course 8', alt: 'img8', src: 'https://www.ionos.mx/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg' },
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

      <Navbar color={'white'}/>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
         <h3 className='p-3'>Category with button</h3>
          <div className='container mx-auto bg-orange-100'>
            <VideoCardList cards={videosToShow} setPrevVideoIndex={setPrevVideoIndex} setNextVideoIndex={setNextVideoIndex} />
          </div> 

        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
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
