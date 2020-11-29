import React, { useState } from 'react';
import Head from 'next/head';

// Components
import Navbar from '../components/navbar/navbar';

// Styles
import styles from '../styles/Home.module.css';

export default function Home() {
  const [value, setValue] = useState('');

  // Courses Array Simulated
  const coursesArr = [
    { name: 'JavaScript', id: 1 },
    { name: 'React', id: 2 },
    { name: 'HTML', id: 3 },
    { name: 'CSS', id: 4 },
    { name: 'React N', id: 5 },
  ];

  // Function Search Filter
  const coursesFilter = coursesArr.filter((course) => {
    return course.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar color='white' value={value} setValue={setValue} />

      <main className={styles.main}>

        <h3 className='text-blue-600'>List Test Search Filter</h3>
        {coursesFilter.map((course) => {
          return (
            <li
              key={course.id}
              className='bg-white rounded-lg p-6 mb-4 shadow-md w-full list-none text-center'
            >
              {course.name}
            </li>
          );
        })}

        <h1 className={styles.title}>Welcome to Next.js!</h1>
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
}
