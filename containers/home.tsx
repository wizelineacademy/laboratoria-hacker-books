import React from 'react';
import Head from 'next/head';

// Components
import Navbar from '../components/navbar/navbar';

// Styles
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </div>
  );
}
