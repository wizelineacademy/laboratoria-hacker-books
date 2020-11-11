import React, { useState, useEffect } from 'react';
import Head from 'next/head'

import ListCardVideo from '../components/listCardVideo/ListCardVideo'
import ArrowPrevSVG from '../components/svg/arrowPrevSVG'
import ArrowNextSVG from '../components/svg/arrowNextSVG'

import styles from '../styles/Home.module.css'

export default function Home({ props }) {

  const [viewNextVideo, setViewNextVideo] = useState(0)

  const cards = [
    { title: 'Course 1', alt: 'img1', src: '1' },
    { title: 'Course 2', alt: 'img2', src: '2' },
    { title: 'Course 3', alt: 'img3', src: '3' },
    { title: 'Course 4', alt: 'img4', src: '4' },
    { title: 'Course 5', alt: 'img5', src: '5' },
    { title: 'Course 6', alt: 'img6', src: '6' },
    { title: 'Course 7', alt: 'img7', src: '7' },
    { title: 'Course 8', alt: 'img8', src: '8' },
  ]

  const arrowNext = () => {
    setViewNextVideo((viewNextVideo + 1) % cards.length);
  }

  const arrowPrev = () => {
    if (viewNextVideo == 0) {
      setViewNextVideo(cards.length - 1)
    } else {
      setViewNextVideo(viewNextVideo - 1)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} pb-6`}>
          Welcome to Bookmark
        </h1>

        <div className="container  mx-auto overflow-hidden w-3/5" style={{ background: "orange" }}>
          <ListCardVideo
            cards={cards}
          />
        </div>
        <div className="flex flex-row">
          <ArrowPrevSVG {...props} onClick={arrowPrev} />
          <ArrowNextSVG {...props} onClick={arrowNext} />
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
