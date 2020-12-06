import React from 'react';
import Head from 'next/head';

// Styles
import styles from '../styles/Home.module.css';
import TestHome from '../components/testHome/testHome';

export default function Home() {
  return (
    <div className='pt-6'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className={styles.title}>Welcome to Next.js!</h1>

      <TestHome />
    </div>
  );
}
